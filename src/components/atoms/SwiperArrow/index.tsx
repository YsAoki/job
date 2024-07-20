import { ComponentPropsWithoutRef, FC } from "react";
import { SSwiperArrow } from "./style";

type Props = ComponentPropsWithoutRef<"div">;

const SwiperArrow: FC<Props> = ({ ...other }) => {
  return <SSwiperArrow {...other} />;
};

export default SwiperArrow;
