import { Header } from "../../components/Header";
import style from "./MoviePage.module.scss";
import { useParams } from "react-router-dom";
import { Title } from "../../components/Title";
import { useGetMovieByIdQuery } from "../../api";
import { SessionTime } from "../../components/SessionTime";
import { InfoTable } from "../../components/InfoTable";
import { helpers } from "./helpers";

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
            <InfoTable data={helpers.getInfoData(data)} />
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
