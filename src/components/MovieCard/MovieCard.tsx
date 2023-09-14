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
    <div className={style.movieCard}>
      <div className={style.imgBlock}>
        <img
          src={props.data.img}
          alt={"Постер фильма" + " " + props.data.title}
        />
      </div>
      <h3 className={style.title}>{props.data.title}</h3>
      <div className={style.genre}>{props.data.genre}</div>
    </div>
  );
};
