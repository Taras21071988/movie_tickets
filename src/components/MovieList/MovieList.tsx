import { useGetAllMoviesQuery } from "../../api";
import { Movie } from "../../types";
import { MovieCard } from "../MovieCard";
import style from "./MovieList.module.scss";
import classNames from "classnames";

interface MovieListProps {
  className?: string;
}

export const MovieList = ({ className }: MovieListProps) => {
  const { isLoading, error, data } = useGetAllMoviesQuery();

  const classes = classNames(style.movieList, className);

  function renderList(data: Movie[]) {
    return data.map((movieData) => (
      <MovieCard key={movieData.id} data={movieData} />
    ));
  }
  if (isLoading) return <h1>Loading....</h1>;
  if (!data) return <h1>Нет данных</h1>;
  if (error) return <h1>Произошла ошибка при загрузке</h1>;

  return <div className={classes}>{renderList(data)}</div>;
};
