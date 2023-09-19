import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovieCard } from "../types";

interface MoviesState {
  data: IMovieCard[];
}

const initialState: MoviesState = {
  data: [
    {
      id: 1,
      img: "https://planetakino.ua/res/get-poster/00000000000000000000000000003830/640/944/blbtl-vend2.jpg",
      title: "Синий жук",
      genre: "Комедия",
    },
    {
      id: 2,
      img: "https://planetakino.ua/res/get-poster/00000000000000000000000000003855/640/944/OPP-vend2.jpg",
      title: "Оппенгеймер",
      genre: "Драма",
    },
    {
      id: 3,
      img: "https://planetakino.ua/res/get-poster/00000000000000000000000000004113/640/944/Gran-Turismo_vend.jpg",
      title: "Гран Туризмо",
      genre: "Приключения",
    },
  ],
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setMovieTitle: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const { id, title } = action.payload;
      const updatedMovies = state.data.map((movie) => {
        if (movie.id === id) {
          movie.title = title;
          return movie;
        }
        return movie;
      });
      state.data = updatedMovies;
    },
  },
});

export const { setMovieTitle } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
