import { Header } from "../../components/Header";
import { InfoTable, InfoTableData } from "../../components/InfoTable";
import { SeatsSelect } from "../../components/SeatsSelect";
import style from "./TicketPage.module.scss";

export const TicketPage = () => {
  const infoData: InfoTableData[] = [
    {
      label: "Билет №1",
      value: `Ряд 1 место 3`,
    },
    {
      label: "Билет №2",
      value: `Ряд 4 место 1`,
    },
  ];

  return (
    <div className={style.TicketPage}>
      <Header title="Покупка билетов" />
      <div className={style.content}>
        <SeatsSelect />
        <div className={style.info}>
          <h3 className={style.title}>Название фильма</h3>
          <InfoTable data={infoData} />
        </div>
      </div>
    </div>
  );
};
