import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { InfoTable} from "../../components/InfoTable";
import { SeatsSelect } from "../../components/SeatsSelect";
import style from "./SessionPage.module.scss";
import { RootState } from "../../store";
import { OrderState } from "../../slices";

export const SessionPage = () => {
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

  return (
    <div className={style.TicketPage}>
      <Header title="Название фильма" className={style.header} />
      <div className={style.content}>
        <SeatsSelect />
        <div className={style.info}>
          {seatsCount > 0 ? (
            <>
              <h3 className={style.title}>Выбранные места</h3>
              <InfoTable data={getOrderInfo(order)} />
              <div className={style.info}>
                <h3 className={style.title}>Стоимость </h3>
                <InfoTable data={getPriceInfo(seatsCount, price)} />
                <h3>Итого: {totalPrice} ₴</h3>
                <div className={style.buyBtn}>Купить</div>
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
