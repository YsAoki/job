import { ComponentPropsWithoutRef, FC } from "react";
import { SInput } from "./style";

type Props = ComponentPropsWithoutRef<"input">;

const InputReadOnly: FC<Props> = ({ ...other }) => {
  return <SInput {...other} readOnly />;
};

export default InputReadOnly;
