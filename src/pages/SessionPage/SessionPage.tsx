import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { InfoTable } from "../../components/InfoTable";
import { SeatsSelect } from "../../components/SeatsSelect";
import style from "./SessionPage.module.scss";
import { RootState } from "../../store";
import { OrderState } from "../../slices";
import { useParams } from "react-router-dom";
import { useGetSessionByIdQuery } from "../../api";
import { Title } from "../../components/Title";
import { useUpdateSeatsByIdMutation } from "../../api/order";
import { OrderData } from "../../types";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const SessionPage = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const params = useParams();
  const { isLoading, data } = useGetSessionByIdQuery(params.id!);
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
  const getPriceInfo = (count: number, price: number) => {
    return [
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
    const buySeats = data?.seat?.buy_seats || [];
    const orderData: OrderData = {
      id: data?.seatId!,
      buy_seats: [...buySeats, ...order.seats],
    };
    buyTicket(orderData);
    setIsDisabled(true);
  };

  return (
    <div className={style.TicketPage}>
      <Header title="Название фильма" className={style.header} />
      <div className={style.content}>
        <SeatsSelect buySeats={data?.seat?.buy_seats} />
        <div className={style.info}>
          {seatsCount > 0 ? (
            <>
              <h3 className={style.title}>Выбранные места</h3>
              <InfoTable data={getOrderInfo(order)} />
              <div className={style.info}>
                <h3 className={style.title}>Стоимость </h3>
                <InfoTable data={getPriceInfo(seatsCount, price)} />
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
