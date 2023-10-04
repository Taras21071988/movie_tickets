import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { InfoTable, InfoTableData } from "../../components/InfoTable";
import { SeatsSelect } from "../../components/SeatsSelect";
import style from "./TicketPage.module.scss";
import { RootState } from "../../store";
import { OrderState } from "../../slices";

export const TicketPage = () => {
  const { order } = useSelector((state: RootState) => state);
  const getOrderInfo = (order: OrderState) => {
    return order.seats.map(({ row, seat }, i) => ({
      label: `Билет${i + 1}`,
      value: `Ряд ${row}  Место${seat} `,
    }));
  };

  return (
    <div className={style.TicketPage}>
      <Header title="Покупка билетов" />
      <div className={style.content}>
        <SeatsSelect />
        <div className={style.info}>
          <h3 className={style.title}>Название фильма</h3>
          <InfoTable data={getOrderInfo(order)} />
        </div>
      </div>
    </div>
  );
};
