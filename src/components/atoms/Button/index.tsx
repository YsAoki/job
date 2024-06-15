import { ComponentPropsWithoutRef, FC } from "react";
import { SButton } from "./style";

export type ButtonProps = {
  $width?: string;
  $fill?: boolean;
};

type Props = ButtonProps & ComponentPropsWithoutRef<"button">;

const Button: FC<Props> = ({ $width = "auto", $fill = false, children, ...other }) => {
  return (
    <SButton $width={$width} $fill={$fill} {...other}>
      {children}
    </SButton>
  );
};

export default Button;
