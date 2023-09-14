import { ReactNode } from "react";
import style from "./Title.module.scss";
import classNames from "classnames";

interface TitleProps {
  children: ReactNode;
  center?: boolean;
}

export const Title = (props: TitleProps) => (
  <h1 className={classNames({ [style.center]: props.center })}>
    {props.children}
  </h1>
);
