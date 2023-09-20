import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../slices";
import { moviesApi, pokemonApi } from "../api/rtkApi";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(pokemonApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
