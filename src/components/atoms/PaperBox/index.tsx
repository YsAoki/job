import { ComponentPropsWithoutRef, FC } from "react";
import { SPaperBox } from "./style";

type Props = ComponentPropsWithoutRef<"div">;

const PaperBox: FC<Props> = ({ children, ...other }) => {
  return <SPaperBox {...other}>{children}</SPaperBox>;
};

export default PaperBox;
