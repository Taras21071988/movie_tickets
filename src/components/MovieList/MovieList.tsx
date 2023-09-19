import { RootState } from "../../store";
import { IMovieCard } from "../../types";
import { MovieCard } from "../MovieCard";
import style from "./MovieList.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";

interface MovieListProps {
  className?: string;
}

export const MovieList = ({ className }: MovieListProps) => {
  const classes = classNames(style.movieList, className);
  const{data} = useSelector((state:RootState)=>state.movies);

  function renderList(data: IMovieCard[]) {
    return data.map((movieData) => (
      <MovieCard key={movieData.id} data={movieData} />
    ));
  }

  return <div className={classes}>{renderList(data)}</div>;
};
