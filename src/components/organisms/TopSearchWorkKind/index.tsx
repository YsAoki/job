import { FC } from "react";
import { OccupationsInfo } from "../../../types/apiJobs";
import Container from "../../atoms/Container";
import SectionTitle from "../../molcules/SectionTitle";
import TopSearchWorkKindCard from "../TopSearchWorkKindCard";
import { SFlexBox, SPaperBox } from "./style";

type TopSearchWorkKindProps = {
  occupations?: OccupationsInfo[];
};

type Props = TopSearchWorkKindProps;

const TopSearchWorkKind: FC<Props> = ({ occupations }) => {
  return (
    <Container>
      <SectionTitle>職種から探す</SectionTitle>
      <SPaperBox>
        <SFlexBox>
          {occupations?.map((occupation) => (
            <TopSearchWorkKindCard key={occupation.classificationId} occupation={occupation} />
          ))}
        </SFlexBox>
      </SPaperBox>
    </Container>
  );
};

export default TopSearchWorkKind;
