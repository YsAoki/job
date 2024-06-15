import { ComponentPropsWithoutRef, FC } from "react";
import { STitleText } from "./style";

export type TitleTextProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: string;
  fontWeight?: number;
  isPrimary?: boolean;
};

type Props = TitleTextProps & ComponentPropsWithoutRef<"h1">;

const TitleText: FC<Props> = ({
  tag = "h1",
  fontSize = "1rem",
  fontWeight = 400,
  isPrimary = false,
  children,
  ...other
}) => {
  return (
    <STitleText as={tag} $fontSize={fontSize} $fontWeight={fontWeight} $isPrimary={isPrimary} {...other}>
      {children}
    </STitleText>
  );
};

export default TitleText;
