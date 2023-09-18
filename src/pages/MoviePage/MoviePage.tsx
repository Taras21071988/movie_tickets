import { Header } from "../../components/Header";
import { Movie } from "../../types";
import style from "./MoviePage.module.scss";

const data: Movie = {
  id: 1,
  img: "https://planetakino.ua/res/get-poster/00000000000000000000000000003830/640/944/blbtl-vend2.jpg",
  title: "Синий жук",
  genre: "Комедия",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui corporis magni quod voluptatum pariatur ratione similique quidem commodi excepturi vel dolore, numquam facere, voluptatibus minus assumenda libero et! Nulla.",
  times: ["10:00", "11:30", "15:30", "19:00", "21:00", "23:55"],
  length: 88,
  country: "США",
  year: 2023,
  actors: [
    "Арнольд Шварцнегер",
    "Дженифер Лопез",
    "Киану Ривз",
    "Роберт Де Ниро",
  ],
};

export const MoviePage = () => {
  return (
    <div className={style.moviePage}>
      <Header title={data.title} className={style.header} />
      <div className={style.content}>
        <div className={style.img}>
          <img src={data.img} alt={data.title} />
        </div>
        <div className={style.desc}></div>
      </div>
    </div>
  );
};
