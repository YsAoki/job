import { ComponentPropsWithoutRef, FC } from "react";
import { SButton } from "./style";

export type ButtonProps = {
  fill?: boolean;
} & ComponentPropsWithoutRef<"button">;

export type ButtonStyleProps = {
  $fill?: boolean;
};

const Button: FC<ButtonProps> = ({ fill = false, children, ...other }) => {
  return (
    <SButton $fill={fill} {...other}>
      {children}
    </SButton>
  );
};

export default Button;
