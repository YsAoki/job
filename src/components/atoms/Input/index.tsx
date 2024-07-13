import { ComponentPropsWithoutRef, FC } from "react";
import { SInput } from "./style";

type InputProps = ComponentPropsWithoutRef<"input">;

type Props = InputProps;

const Input: FC<Props> = ({ ...other }) => {
  return <SInput {...other} />;
};

export default Input;
