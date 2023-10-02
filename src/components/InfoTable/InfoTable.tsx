import style from "./InfoTable.module.scss";
import { InfoTableData } from "./types";

interface InfoTableProps {
  data: InfoTableData[];
}

export const InfoTable = ({ data }: InfoTableProps) => {
  const renderItems = (data: InfoTableData[]) => {
    return data.map(({ label, value }) => (
      <>
        <div className={style.label}>{label}</div>
        <div className={style.value}>{value}</div>
      </>
    ));
  };
  return <div className={style.InfoTable}>{renderItems(data)}</div>;
};
