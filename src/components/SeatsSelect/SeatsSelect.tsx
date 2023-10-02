import classNames from "classnames";
import style from "./SeatsSelect.module.scss";
import { Seat } from "./components/Seat";

export const SeatsSelect = () => {
  let seatId = 1;
  let resetIdx = 0;
  let resetNum = [4, 5, 6];
  const emptyCell = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];

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
              if (emptyCell.includes(i)) {
                return <div />;
              } else {
                const classes = classNames("ic-seat", {
                  [style.availabel]: seatId !== 3 && seatId !== 5,
                  [style.busy]: seatId === 3,
                  [style.selected]: seatId === 5,
                });
                const data = {
                  id: seatId,
                  num: seatId,
                  status: seatId !== 3 ? "availabel" : "busy",
                };
                if (seatId === resetNum[resetIdx] || seatId === 9) {
                  seatId = 1;
                  resetIdx++;
                } else {
                  seatId++;
                }
                return (
                  <Seat
                    key={`${i}-${Date.now()}`}
                    className={classes}
                    data={data}
                  />
                );
              }

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
