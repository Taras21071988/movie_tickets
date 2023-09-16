import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { Title } from "../Title";

interface HeaderProps {
  title: string;
}

export const Header = ({title}: HeaderProps) => {

  return (
    <div className={style.header}>
      <Link to='/' className={style.link}>Вернутся на главную</Link>
      <Title center>{title}</Title>
    </div>
  );
};
