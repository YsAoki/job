import { ComponentPropsWithoutRef, FC } from "react";
import { SConditionNameTag } from "./style";

type Props = ComponentPropsWithoutRef<"li">;

const ConditionNameTag: FC<Props> = ({ children, ...other }) => {
  return <SConditionNameTag {...other}>{children}</SConditionNameTag>;
};

export default ConditionNameTag;
