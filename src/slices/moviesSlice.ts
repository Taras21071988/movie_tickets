import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types";

interface MoviesState {
  data: Movie[];
}

const initialState: MoviesState = {
  data: [
    {
      id: 1,
      img: "https://planetakino.ua/res/get-poster/00000000000000000000000000003830/640/944/blbtl-vend2.jpg",
      title: "Синий жук",
      genre: "Комедия",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui corporis magni quod voluptatum pariatur ratione similique quidem commodi excepturi vel dolore, numquam facere, voluptatibus minus assumenda libero et! Nulla.",
      actors: [
        "Арнольд Шварцнегер",
        "Дженифер Лопез",
        "Киану Ривз",
        "Роберт Де Ниро",
      ],
      country: "Украина",
      year: 2016,
      premier: "21 ноября 2023",
      duration: 100,
      times: ["10:00", "11:30", "15:30", "19:00", "23:00"],
    },
    {
      id: 2,
      img: "https://planetakino.ua/res/get-poster/00000000000000000000000000003855/640/944/OPP-vend2.jpg",
      title: "Оппенгеймер",
      genre: "Драма",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui corporis magni quod voluptatum pariatur ratione similique quidem commodi excepturi vel dolore, numquam facere, voluptatibus minus assumenda libero et! Nulla.",
      actors: [
        "Арнольд Шварцнегер",
        "Дженифер Лопез",
        "Киану Ривз",
        "Роберт Де Ниро",
      ],
      country: "Украина",
      year: 2017,
      premier: "21 ноября 2023",
      duration: 100,
      times: ["10:00", "11:30", "14:30", "18:00", "23:00"],
    },
    {
      id: 3,
      img: "https://planetakino.ua/res/get-poster/00000000000000000000000000004113/640/944/Gran-Turismo_vend.jpg",
      title: "Гран Туризмо",
      genre: "Приключения",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui corporis magni quod voluptatum pariatur ratione similique quidem commodi excepturi vel dolore, numquam facere, voluptatibus minus assumenda libero et! Nulla.",
      actors: [
        "Арнольд Шварцнегер",
        "Дженифер Лопез",
        "Киану Ривз",
        "Роберт Де Ниро",
      ],
      country: "Украина",
      year: 2018,
      premier: "21 ноября 2023",
      duration: 100,
      times: ["9:00", "12:00", "16:30", "18:30", "23:00", "23:30"],
    },
  ],
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {},
});

export const moviesReducer = moviesSlice.reducer;
