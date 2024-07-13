import { ComponentPropsWithoutRef, FC } from "react";
import { SScrollBox } from "./style";

type Props = ComponentPropsWithoutRef<"div">;

const ScrollBox: FC<Props> = ({ children, ...other }) => {
  return <SScrollBox {...other}>{children}</SScrollBox>;
};

export default ScrollBox;
