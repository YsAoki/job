import { ComponentPropsWithoutRef, FC } from "react";
import { STitleText } from "./style";

export type TitleTextProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fill?: boolean;
};

export type TitleTextStyleProps = {
  $fill?: boolean;
};

type Props = TitleTextProps & ComponentPropsWithoutRef<"h1">;

const TitleText: FC<Props> = ({ tag = "h1", fill = false, children, ...other }) => {
  return (
    <STitleText as={tag} $fill={fill} {...other}>
      {children}
    </STitleText>
  );
};

export default TitleText;
