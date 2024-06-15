import { ComponentPropsWithoutRef, FC } from "react";
import { SImage } from "./style";

type Props = ComponentPropsWithoutRef<"img">

const Image: FC<Props> = ({ ...other }) => {
  return <SImage {...other} />;
};

export default Image;
