import { Actors } from "./actors";
import { Country } from "./country";

export interface IMovieCard {
  id: number;
  img: string;
  title: string;
  genre: string;
}

export interface Movie extends IMovieCard {
  description: string;
  times: string[];
  length: number;
  country: Country;
  year: number;
  actors: Actors[];
}
