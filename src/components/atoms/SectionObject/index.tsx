import { ComponentPropsWithoutRef, FC } from "react";
import { SSectionObject } from "./style";

type Props = ComponentPropsWithoutRef<"div">;

const SectionObject: FC<Props> = ({ ...other }) => {
  return <SSectionObject {...other} />;
};

export default SectionObject;
