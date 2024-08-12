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
  const urlGenerate = (discerningConditionId: string) => {
    return `jobs/search-result?dc=${discerningConditionId}`;
  };

  return (
    <Container>
      <SectionTitle>こだわり条件から探す</SectionTitle>
      <SPaper>
        <ul>
          {discerning?.map((item) => (
            <li key={item.discerningConditionId}>
              <NavLink to={urlGenerate(item.discerningConditionId)}>{item.discerningConditionName}</NavLink>
            </li>
          ))}
        </ul>
      </SPaper>
    </Container>
  );
};

export default TopSearchDiscerning;
