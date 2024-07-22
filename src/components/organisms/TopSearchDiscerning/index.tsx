import { FC } from "react";
import { DiscerningConditionInfo } from "../../../types/apiJobs";
import Container from "../../atoms/Container";
import NavLink from "../../atoms/NavLink";
import SectionTitle from "../../molcules/SectionTitle";
import { SPaper } from "./style";

type TopSearchDiscerningProps = {
  discerning?: DiscerningConditionInfo[];
};

type Props = TopSearchDiscerningProps;

const TopSearchDiscerning: FC<Props> = ({ discerning }) => {
  return (
    <Container>
      <SectionTitle tag="h2">こだわり条件から探す</SectionTitle>
      <SPaper as="ul">
        {discerning?.map((item) => (
          <li key={item.discerningConditionId}>
            <NavLink to={"/"}>{item.discerningConditionName}</NavLink>
          </li>
        ))}
      </SPaper>
    </Container>
  );
};

export default TopSearchDiscerning;
