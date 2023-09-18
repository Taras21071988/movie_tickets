import classNames from "classnames";
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
  duration: 88,
  country: "США",
  year: 2023,
  actors: [
    "Арнольд Шварцнегер",
    "Дженифер Лопез",
    "Киану Ривз",
    "Роберт Де Ниро",
  ],
  premier: "21 ноября 2023",
};

export const MoviePage = () => {
  const renderSessionTimes = (times: string[]) => {
    return times.map((time, index) => {
      const classes = classNames(style.sessionTimeItem, 'hover');
      return (
        <div key={index} className={classes}>
          {time}
        </div>
      );
    });
  };
  return (
    <div className={style.moviePage}>
      <Header title={data.title} className={style.header} />
      <div className={style.content}>
        <div>
          <div className={style.imgBlock}>
            <img src={data.img} alt={data.title} />
          </div>
          <div className={style.desc}>{data.description}</div>
        </div>
        <div className={style.rightCol}>
          <div className={style.info}>
            <div className={style.infoLabel}>Премьера</div>
            <div className={style.infoValue}>{data.premier}</div>
            <div className={style.infoLabel}>В ролях</div>
            <div className={style.infoValue}>{data.actors.join(",  ")}</div>
            <div className={style.infoLabel}>Длительность</div>
            <div className={style.infoValue}>{data.duration}</div>
            <div className={style.infoLabel}>Страна</div>
            <div className={style.infoValue}>{data.country}</div>
            <div className={style.infoLabel}>Год </div>
            <div className={style.infoValue}>{data.year}</div>
            <div className={style.infoLabel}></div>
            <div className={style.infoValue}></div>
          </div>
          <div className={style.session}>
            <h3 className={style.subTitle}>Сеансы</h3>
            <div className={style.sessionTimesList}>
              {renderSessionTimes(data.times)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
