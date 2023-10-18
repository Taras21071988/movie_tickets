import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { InfoTable } from "../../components/InfoTable";
import { SeatsSelect } from "../../components/SeatsSelect";
import style from "./SessionPage.module.scss";
import { RootState } from "../../store";
import { OrderState, clearOrder } from "../../slices";
import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery, useGetSessionByIdQuery } from "../../api";
import { Title } from "../../components/Title";
import { useUpdateSeatsByIdMutation } from "../../api/order";
import { OrderData } from "../../types";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const SessionPage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const params = useParams();
  const { isLoading, data: sessionData } = useGetSessionByIdQuery(
    params.sessionId!
  );
  const { data: movieData } = useGetMovieByIdQuery(params.movieId!);
  const [buyTicket, { isSuccess }] = useUpdateSeatsByIdMutation();
  const { order } = useSelector((state: RootState) => state);
  const seatsCount = order.seats.length;
  const price = 100;
  const totalPrice = price * seatsCount;

  const getOrderInfo = (order: OrderState) => {
    return order.seats.map(({ row, seat }, i) => ({
      label: `Билет${i + 1}`,
      value: `Ряд ${row}  Место${seat} `,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      //генерируем QR Code
    }
  }, [isSuccess]);

  if (isLoading) return <Title center>Загрузка свободных мест</Title>;
  const getPriceInfo = (count: number, price: number, time: string) => {
    return [
      {
        label: "Начало в",
        value: time,
      },
      {
        label: "Колличество мест",
        value: count,
      },
      {
        label: "Стоимость билета",
        value: `${price}   ₴`,
      },
    ];
  };

  const onClick = () => {
    const buySeats = sessionData?.seat?.buy_seats || [];
    const orderData: OrderData = {
      id: sessionData?.seatId!,
      buy_seats: [...buySeats, ...order.seats],
    };
    buyTicket(orderData);
    setIsDisabled(true);
  };

  if (!sessionData) return null;

  return (
    <div className={style.TicketPage}>
      <Header title="Название фильма" className={style.header} />
      <div className={style.content}>
        <SeatsSelect buySeats={sessionData?.seat?.buy_seats} />
        <div className={style.info}>
          {seatsCount > 0 ? (
            <>
              <h3 className={style.title}>Выбранные места</h3>
              <InfoTable data={getOrderInfo(order)} />
              <div className={style.info}>
                <h3 className={style.title}>Стоимость </h3>
                <InfoTable
                  data={getPriceInfo(seatsCount, price, sessionData?.time)}
                />
                <h3>Итого: {totalPrice} ₴</h3>
                <div
                  className={classNames(style.buyBtn, {
                    [style.disable]: isDisabled,
                  })}
                  onClick={onClick}
                >
                  Купить
                </div>
              </div>
            </>
          ) : (
            <h3 className={style.titleCenter}> Выберите места</h3>
          )}
        </div>
      </div>
    </div>
  );
};
