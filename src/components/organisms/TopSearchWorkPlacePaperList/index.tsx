import { FC } from "react";
import { LocationInfo } from "../../../types/apiJobs";
import NavLink from "../../atoms/NavLink";
import { SListWrapper, SPrefectureList, SRegionName } from "./style";

type TopSearchWorkPlacePaperListProps = {
  region: LocationInfo;
};

type Props = TopSearchWorkPlacePaperListProps;

const TopSearchWorkPlacePaperList: FC<Props> = ({ region }) => {
  const generateUrl = (prefectureId: string) => {
    return `/jobs/search-result?pId=${prefectureId}`;
  };

  return (
    <SListWrapper>
      <SRegionName tag="h3">{region.regionName}</SRegionName>
      <SPrefectureList>
        {region.prefectures.map((prefecture) => (
          <NavLink key={prefecture.prefectureId} to={generateUrl(prefecture.prefectureId)}>
            {prefecture.prefectureName}
          </NavLink>
        ))}
      </SPrefectureList>
    </SListWrapper>
  );
};

export default TopSearchWorkPlacePaperList;
