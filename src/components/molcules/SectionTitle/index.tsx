import { ComponentPropsWithoutRef, FC } from "react";
import SectionObject from "../../atoms/SectionObject";
import TitleText, { TitleTextProps } from "../../atoms/TitleText";
import { SSectionTitleWrapper } from "./style";

type Props = TitleTextProps & ComponentPropsWithoutRef<"div">;

const SectionTitle: FC<Props> = ({ children, ...other }) => {
  return (
    <SSectionTitleWrapper {...other}>
      <SectionObject />
      <TitleText>{children}</TitleText>
    </SSectionTitleWrapper>
  );
};

export default SectionTitle;
