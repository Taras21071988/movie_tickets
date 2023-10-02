import { Header } from "../../components/Header";
import { SeatsSelect } from "../../components/SeatsSelect";
import style from "./TicketPage.module.scss";

export const TicketPage = () => {
  return (
    <div className={style.TicketPage}>
      <Header title="Покупка билетов"/>

      <SeatsSelect />
    </div>
  );
};
