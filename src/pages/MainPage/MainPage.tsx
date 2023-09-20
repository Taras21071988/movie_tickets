import { useSelector, useDispatch } from "react-redux";
import { MovieList } from "../../components/MovieList";
import { Title } from "../../components/Title";
import style from "./MainPage.module.scss";
import {
  useGetMovieByIdQuery,
  useGetPokemonByNameQuery,
} from "../../api/rtkApi";

export const MainPage = () => {
  const { data, error, isLoading } = useGetMovieByIdQuery(1);

  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>Произошла ошибка при загрузке</h1>;
  return (
    <div className={style.MainPage}>
      <Title center>Выберите фильм</Title>
      <MovieList className={style.movieList} />
    </div>
  );
};
