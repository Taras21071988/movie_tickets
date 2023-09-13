import { MovieCard } from "../../components/MovieCard";
import { Title } from "../../components/Title";
import style from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <Title>Выберите фильм</Title>
      <MovieCard />
    </div>
  );
};
