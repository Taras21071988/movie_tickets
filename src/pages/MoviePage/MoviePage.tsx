import { Header } from "../../components/Header";
import style from "./MoviePage.module.scss";
import { useParams } from "react-router-dom";
import { Title } from "../../components/Title";
import { useGetMovieByIdQuery } from "../../api";
import { SessionTime } from "../../components/SessionTime";

export const MoviePage = () => {
  const params = useParams();
  const { data, isLoading } = useGetMovieByIdQuery(params.id!);

  const renderSessionTimes = (times: string[]) => {
    return times.map((time, i) => {
      return <SessionTime key={`${i}-${Date.now()}`} id={i} time={time} />;
    });
  };
  if (isLoading) return <Title center>Loading...</Title>;
  if (!data) return <Title center>Фильм не найден</Title>;

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
