import { ComponentPropsWithoutRef, FC } from "react";
import { SFlexBox } from "./style";

export type FlexBoxProps = {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
};

type Props = FlexBoxProps & ComponentPropsWithoutRef<"div">;

const FlexBox: FC<Props> = ({
  alignItems = "initial",
  justifyContent = "initial",
  flexDirection = "initial",
  children,
  ...other
}) => {
  return (
    <SFlexBox $alignItems={alignItems} $justifyContent={justifyContent} $flexDirection={flexDirection} {...other}>
      {children}
    </SFlexBox>
  );
};

export default FlexBox;