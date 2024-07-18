import { FC } from "react";
import { LocationInfo } from "../../../types/apiJobs";
import NavLink from "../../atoms/NavLink";
import { SListWrapper, SPrefectureList, SRegionName } from "./style";

type TopSearchWorkPlacePaperListProps = {
  region: LocationInfo;
};

type Props = TopSearchWorkPlacePaperListProps;

const TopSearchWorkPlacePaperList: FC<Props> = ({ region }) => {
  return (
    <SListWrapper>
      <SRegionName tag="h3">{region.regionName}</SRegionName>
      <SPrefectureList>
        {region.prefectures.map((prefecture) => (
          <NavLink to="/">{prefecture.prefectureName}</NavLink>
        ))}
      </SPrefectureList>
    </SListWrapper>
  );
};

export default TopSearchWorkPlacePaperList;
