import { ComponentPropsWithoutRef, FC } from "react";
import { SButton } from "./style";

export type ButtonProps = {
  fill?: boolean;
};

export type ButtonStyleProps = {
  $fill?: boolean;
};

type Props = ButtonProps & ComponentPropsWithoutRef<"button">;

const Button: FC<Props> = ({ fill = false, children, ...other }) => {
  return (
    <SButton $fill={fill} {...other}>
      {children}
    </SButton>
  );
};

export default Button;
