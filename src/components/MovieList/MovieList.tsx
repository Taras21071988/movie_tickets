import { IMovieCard } from "../../types";
import { MovieCard } from "../MovieCard";
import style from "./MovieList.module.scss";

const movies: IMovieCard[] = [
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
];
export const MovieList = () => {
  function renderList(data: IMovieCard[]) {
   return data.map((movieData) => <MovieCard key={movieData.id} data={movieData} />);
  }

  return (
    <div className={style.movieList}>
      {renderList(movies)}
    </div>
  );
};