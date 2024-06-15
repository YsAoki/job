import { ComponentPropsWithoutRef, FC } from "react";
import { SPaperBox } from "./style";

export type PaperBoxProps = {
  width: string;
  height: string;
};

type Props = PaperBoxProps & ComponentPropsWithoutRef<"div">

const PaperBox: FC<Props> = ({
  width = "100%",
  height = "auto",
  children,
  ...other
}) => {
  return (
    <SPaperBox $width={width} $height={height} {...other}>
      {children}
    </SPaperBox>
  );
};

export default PaperBox;
