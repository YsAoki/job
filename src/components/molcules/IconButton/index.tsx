import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import Button, { ButtonStyleProps } from "../../atoms/Button";
import { SFlexBox, SIconSpan } from "./style";

type IconButtonProps = {
  icon: ReactNode;
};

type Props = IconButtonProps & ButtonStyleProps & ComponentPropsWithoutRef<"button">;

const IconButton: FC<Props> = ({ icon, $fill = false, children, ...other }) => {
  return (
    <Button fill={$fill} {...other}>
      <SFlexBox>
        <SIconSpan>{icon}</SIconSpan>
        {children}
      </SFlexBox>
    </Button>
  );
};

export default IconButton;
