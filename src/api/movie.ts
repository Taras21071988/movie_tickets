import { Movie } from "../types";
import { rtkApi } from "./rtkApi";

const moviesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMovies: build.query<Movie[], void>({
      query: () => "movies",
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllMoviesQuery } = moviesApi;
