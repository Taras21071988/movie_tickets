import classNames from "classnames";
import style from "./SeatsSelect.module.scss";
import { Seat } from "./components/Seat";

export const SeatsSelect = () => {
  // const colm = 9;
  // const row = 7;
  return (
    <div className={style.seatsSelect}>
      <div className={style.display}>
        <i className="ic-display"></i>
        <span>Экран</span>
      </div>

      <div className={style.place}>
        <div className={style.rows}>
          {Array(7)
            .fill(0)
            .map((item, i) => (
              <div key={`${i}-${Date.now()}`} className={style.row}>
                {i + 1}
              </div>
            ))}
        </div>
        <div className={style.seats}>
          {Array(63)
            .fill(0)
            .map((item, i) => {
              const classes = classNames("ic-seat", {
                [style.availabel]: i !== 3 && i !== 5,
                [style.busy]: i === 3,
                [style.selected]: i === 5,
              });
              const data = {
                id: i,
                num: i + 1,
                status: i !== 3 ? "availabel" : "busy",
              };

              const emptyCell = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];
              return emptyCell.includes(i) ? (
                <div />
              ) : (
                <Seat
                  key={`${i}-${Date.now()}`}
                  className={classes}
                  data={data}
                />
              );
            })}
        </div>
      </div>
      <div className={style.info}>
        <div className={classNames(style.infoItem, style.availabel)}>
          <i className="ic-dot" />
          <span>Доступно</span>
        </div>
        <div className={classNames(style.infoItem, style.busy)}>
          <i className="ic-dot" />
          <span>Занято</span>
        </div>
        <div className={classNames(style.infoItem, style.selected)}>
          <i className="ic-dot" />
          <span>Выбранно</span>
        </div>
      </div>
    </div>
  );
};
