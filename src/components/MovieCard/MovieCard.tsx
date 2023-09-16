import { Link } from "react-router-dom";
import style from "./MovieCard.module.scss";

interface MovieCardProps {
  data: {
    img: string;
    title: string;
    genre: string;
  };
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <Link to='/movie' className={style.movieCard}>
      <div className={style.imgBlock}>
        <img
          src={props.data.img}
          alt={"Постер фильма" + " " + props.data.title}
        />
      </div>
      <h3 className={style.title}>{props.data.title}</h3>
      <div className={style.genre}>{props.data.genre}</div>
    </Link>
  );
};
