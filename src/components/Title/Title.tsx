import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const Title = (props: TitleProps) => <h1>{props.children}</h1>;
