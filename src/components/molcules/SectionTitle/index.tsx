import { ComponentPropsWithoutRef, FC } from "react";
import SectionObject from "../../atoms/SectionObject";
import TitleText, { TitleTextProps } from "../../atoms/TitleText";
import { SSectionTitleWrapper } from "./style";

export type SectionTitleProps = {
  height?: string;
};

type Props = SectionTitleProps & TitleTextProps & ComponentPropsWithoutRef<"div">;

const SectionTitle: FC<Props> = ({ fontSize, fontWeight, height = "auto", children, ...other }) => {
  return (
    <SSectionTitleWrapper height={height} {...other}>
      <SectionObject />
      <TitleText fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </TitleText>
    </SSectionTitleWrapper>
  );
};

export default SectionTitle;
