import { Header } from "../../components/Header";
import { SeatsSelect } from "../../components/SeatsSelect";
import style from "./TicketPage.module.scss";

export const TicketPage = () => {
  return (
    <div className={style.TicketPage}>
      <Header title="Покупка билетов" />
      <div className={style.content}>
        <SeatsSelect />
        <div className={style.info}>
            <h3 className={style.title}>Название фильма</h3>
            <div></div>
        </div>
      </div>
    </div>
  );
};
