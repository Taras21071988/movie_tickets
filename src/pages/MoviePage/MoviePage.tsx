import { Header } from "../../components/Header";
import style from "./MoviePage.module.scss";
import { useParams } from "react-router-dom";
import { Title } from "../../components/Title";
import { useGetMovieByIdQuery } from "../../api";
import { SessionTime } from "../../components/SessionTime";
import { InfoTable } from "../../components/InfoTable";
import { helpers } from "./helpers";
import { Session } from "../../types";

export const MoviePage = () => {
  const params = useParams();
  const { data, isLoading } = useGetMovieByIdQuery(params.id!);

  const renderSessionTimes = (sessions: Session[]) => {
    return sessions.map(({ time, id }) => {
      return <SessionTime key={id} id={id} time={time} />;
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
              {renderSessionTimes(data.sessions)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
