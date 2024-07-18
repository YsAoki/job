import { ComponentPropsWithoutRef, FC } from "react";
import SectionObject from "../../atoms/SectionObject";
import { TitleTextProps } from "../../atoms/TitleText";
import { SSectionTitleWrapper, STitleText } from "./style";

type Props = TitleTextProps & ComponentPropsWithoutRef<"div">;

const SectionTitle: FC<Props> = ({ children, ...other }) => {
  return (
    <SSectionTitleWrapper {...other}>
      <SectionObject />
      <STitleText tag="h2">{children}</STitleText>
    </SSectionTitleWrapper>
  );
};

export default SectionTitle;
