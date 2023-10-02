import style from "./InfoTable.module.scss";


export const InfoTable = (props: InfoTableProps) => {
  return (
    <div className={style.InfoTable}>
      <div className={style.label}>Премьера</div>
      <div className={style.value}>{data.premier}</div>
      <div className={style.label}>В ролях</div>
      <div className={style.value}>{data.actors.join(",  ")}</div>
      <div className={style.label}>Длительность</div>
      <div className={style.value}>{data.duration}</div>
      <div className={style.label}>Страна</div>
      <div className={style.value}>{data.country}</div>
      <div className={style.label}>Год </div>
      <div className={style.value}>{data.year}</div>
      <div className={style.label}></div>
      <div className={style.value}></div>
    </div>
  );
};
