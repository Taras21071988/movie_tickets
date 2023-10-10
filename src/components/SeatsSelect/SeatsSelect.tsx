import classNames from "classnames";
import style from "./SeatsSelect.module.scss";
import { Seat } from "./components/Seat";
import { useParams } from "react-router-dom";
import { useGetSessionByIdQuery } from "../../api";
import { Title } from "../Title";
import { Seat as ISeat } from "../../types";

export const SeatsSelect = () => {
  const params = useParams();
  const { isLoading, data } = useGetSessionByIdQuery(params.id!);

  const rows = 7;
  const seats = 63;
  let seat = 1;
  let row = 1;
  let resetNum = [4, 6, 5];
  const emptyCells = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26];

  const isBusySeat = (
    row: number,
    seat: number,
    buySeats: ISeat[] | undefined
  ) => {
    return buySeats?.some(
      (buySeat) => buySeat.row === row && buySeat.seat === seat
    );
  };

  if (isLoading) return <Title center>Загрузка свободных мест</Title>;

  return (
    <div className={style.seatsSelect}>
      <div className={style.display}>
        <i className="ic-display"></i>
        <span>Экран</span>
      </div>

      <div className={style.place}>
        <div className={style.rows}>
          {Array(rows)
            .fill(0)
            .map((item, i) => (
              <div key={`${i}-${Date.now()}`} className={style.row}>
                {i + 1}
              </div>
            ))}
        </div>
        <div className={style.seats}>
          {Array(seats)
            .fill(0)
            .map((item, i) => {
              if (emptyCells.includes(i)) {
                return <div key={`${i}-${Math.random()}`} />;
              } else {
                const seatData = {
                  id: seat,
                  seat,
                  row,
                  status: isBusySeat(row, seat, data?.seat?.buy_seats)
                    ? "busy"
                    :"availabel" ,
                };
                if (seat === resetNum[row - 1] || seat === 9) {
                  seat = 1;
                  row++;
                  seatData.row = row;
                } else {
                  seat++;
                }

                return <Seat key={`${row}-${seat}`} data={seatData} />;
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
