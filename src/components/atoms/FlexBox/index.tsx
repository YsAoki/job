import { ComponentPropsWithoutRef, ElementType, FC } from "react";
import { SFlexBox } from "./style";

export type FlexBoxProps = {
  as?: ElementType;
};

type Props = FlexBoxProps & ComponentPropsWithoutRef<"div">;

const FlexBox: FC<Props> = ({ as = "div", children, ...other }) => {
  return (
    <SFlexBox as={as} {...other}>
      {children}
    </SFlexBox>
  );
};

export default FlexBox;
