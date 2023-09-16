import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import style from "./MoviePage.module.scss";

export const MoviePage = () => {
  return (
    <div className={style.moviePage}>
      <Header title="Название фильма" />
    </div>
  );
};
