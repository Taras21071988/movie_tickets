import { ReactNode } from "react";
import style from "./Title.module.scss"

interface TitleProps {
  children: ReactNode;
}

export const Title = (props: TitleProps) => <h1 className={style.Title}>{props.children}</h1>;
