import style from "./MovieCard.module.scss";

interface MovieCardProps {
  img?: string;
  title?: string;
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <div className={style.MovieCard}>
      <img
        src="https://planetakino.ua/res/get-poster/00000000000000000000000000003830/640/944/blbtl-vend2.jpg"
        alt="Постер фильма"
      />
      <h3>Синий жук</h3>
    </div>
  );
};
