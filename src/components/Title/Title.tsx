import { ReactNode } from "react";
import style from "./Title.module.scss";
import classNames from "classnames";

interface TitleProps {
  children: ReactNode;
  center?: boolean;
  className?: string;
}

export const Title = (props: TitleProps) => {
  const { children, center, className } = props;
  const classes = classNames(
    {
      [style.center]: center,
    },
    className
  );

  return <h1 className={classes}>{children}</h1>;
};
