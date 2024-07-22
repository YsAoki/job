import { ComponentPropsWithoutRef, FC } from "react";
import SectionObject from "../../atoms/SectionObject";
import { TitleTextProps } from "../../atoms/TitleText";
import SeeMoreLink from "../SeeMoreLink";
import { SSectionTitle, SSectionTitleWrapper, STitleText } from "./style";

type SectionTitleProps = {
  to?: string;
};

type Props = SectionTitleProps & TitleTextProps & ComponentPropsWithoutRef<"div">;

const SectionTitle: FC<Props> = ({ to, children, ...other }) => {
  return (
    <SSectionTitleWrapper {...other}>
      <SSectionTitle>
        <SectionObject />
        <STitleText tag="h2">{children}</STitleText>
      </SSectionTitle>
      <div>{to && <SeeMoreLink to={to} />}</div>
    </SSectionTitleWrapper>
  );
};

export default SectionTitle;
