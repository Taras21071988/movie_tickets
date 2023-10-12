import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { InfoTable } from "../../components/InfoTable";
import { SeatsSelect } from "../../components/SeatsSelect";
import style from "./SessionPage.module.scss";
import { RootState } from "../../store";
import { OrderState, clearOrder } from "../../slices";
import { useParams } from "react-router-dom";
import { useGetSessionByIdQuery } from "../../api";
import { Title } from "../../components/Title";

export const SessionPage = () => {
  const params = useParams();
  const { isLoading, data } = useGetSessionByIdQuery(params.id!);

  const dispatch = useDispatch();
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
    dispatch(clearOrder());
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
                <div className={style.buyBtn} onClick={onClick}>
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
