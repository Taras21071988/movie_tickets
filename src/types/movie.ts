import { Actors } from "./actors";
import { Country } from "./country";
import { Times } from "./times";

export interface IMovieCard {
  id: number;
  img: string;
  title: string;
  genre: string;
}

export interface Movie extends IMovieCard {
  description: string;
  times: Times[] ;
  duration: number;
  country: Country;
  year: number;
  actors: Actors[];
  premier: string;
}
