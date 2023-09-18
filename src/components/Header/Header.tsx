import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { Title } from "../Title";
import classNames from "classnames";

interface HeaderProps {
  title: string;
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { title, className } = props;
  const classes = classNames(style.header,className)

  return (
    <div className={classes}>
      <Link to="/" className={classNames("hover", style.backBtn)}>
        Вернутся на главную
      </Link>
      <Title center className={style.title}>
        {title}
      </Title>
    </div>
  );
};
