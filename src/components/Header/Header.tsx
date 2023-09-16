import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { Title } from "../Title";
import classNames from "classnames";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div className={style.header}>
      <Link to="/" className={classNames("hover", style.backBtn)}>
        Вернутся на главную
      </Link>
      <Title center>{title}</Title>
    </div>
  );
};
