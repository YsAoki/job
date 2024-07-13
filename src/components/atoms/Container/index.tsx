import { ComponentPropsWithoutRef, FC } from "react";
import { SContainer } from "./style";

type Props = ComponentPropsWithoutRef<"div">;

const Container: FC<Props> = ({ children, ...other }) => {
  return <SContainer {...other}>{children}</SContainer>;
};

export default Container;
