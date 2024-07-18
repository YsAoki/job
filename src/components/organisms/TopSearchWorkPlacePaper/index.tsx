import { ComponentPropsWithoutRef, FC } from "react";
import { LocationInfo } from "../../../types/apiJobs";
import Container from "../../atoms/Container";
import TopSearchWorkPlacePaperList from "../TopSearchWorkPlacePaperList";
import { SFlexBox, SPaper } from "./style";

type TopSearchWorkPlacePaper = {
  locations?: LocationInfo[];
};

type Props = TopSearchWorkPlacePaper & ComponentPropsWithoutRef<"div">;

const TopSearchWorkPlacePaper: FC<Props> = ({ locations }) => {
  return (
    <Container>
      <SPaper>
        <SFlexBox>
          {locations?.map((region) => <TopSearchWorkPlacePaperList key={region.regionId} region={region} />)}
        </SFlexBox>
      </SPaper>
    </Container>
  );
};

export default TopSearchWorkPlacePaper;
