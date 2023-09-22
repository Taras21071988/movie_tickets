import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types";

interface MoviesState {
  data: Movie[];
}

const initialState: MoviesState = {
  data: [],
};

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {},
});

export const moviesReducer = moviesSlice.reducer;
