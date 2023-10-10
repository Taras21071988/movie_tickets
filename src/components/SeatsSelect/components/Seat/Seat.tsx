import classNames from "classnames";
import style from "./Seat.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSeat, deleteSeat } from "../../../../slices";

interface SeatProps {
  data: {
    row: number;
    seat: number;
    status: string; //"available" | "busy" | "selected";
  };
}

export const Seat = ({ data }: SeatProps) => {
  const { status: initStatus, seat, row } = data;
  const [status, setStatus] = useState(initStatus);
  const classes = classNames(style.seat, style[status]);
  const dispatch = useDispatch();

  const onClick = () => {
    if (initStatus !== "busy") {
      const isSelected = status === "availabel";
      const newStatus = isSelected ? "selected" : "availabel";
      setStatus(newStatus);

      if (isSelected) {
        dispatch(addSeat({ row, seat }));
      } else {
        dispatch(deleteSeat({ row, seat }));
      }
    }
  };

  return (
    <div className={classes} onClick={onClick}>
      <i className="ic-seat" />
      <span className={style.seatNum}>{seat}</span>
    </div>
  );
};
