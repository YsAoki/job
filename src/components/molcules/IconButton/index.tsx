import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import Button, { ButtonProps } from "../../atoms/Button";
import FlexBox from "../../atoms/FlexBox";
import { SIconSpan } from "./style";

type IconButtonProps = {
  icon: ReactNode;
};

type Props = IconButtonProps & ButtonProps & ComponentPropsWithoutRef<"button">;

const IconButton: FC<Props> = ({ icon, $width = "auto", $fill = false, children, ...other }) => {
  return (
    <Button $width={$width} $fill={$fill} {...other}>
      <FlexBox alignItems="center">
        <SIconSpan>{icon}</SIconSpan>
        {children}
      </FlexBox>
    </Button>
  );
};

export default IconButton;
