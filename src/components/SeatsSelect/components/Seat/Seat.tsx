import classNames from "classnames";
import style from "./Seat.module.scss";
import { useState } from "react";

interface SeatProps {
  className: string;
  data: {
    id: number;
    num: number;
    status: string //"available" | "busy" | "selected";
  };
}

export const Seat = ({ data }: SeatProps) => {
  const { id, status, num } = data;
  const classes = classNames(style.seat, style[status]);
  const []=useState()
  const onClick = ()=>{

  }
   
  return (
    <div className={classes} onClick={onClick}>
      <i className="ic-seat" />
      <span className={style.seatNum}>{num}</span>
    </div>
  );
};
