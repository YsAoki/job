import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { OccupationsInfo } from "../../../types/apiJobs";
import SwiperArrow from "../../atoms/SwiperArrow";
import { SCard, SCardInnerLeft, SCardInnerRight, SCardTitle, SClassificationName, SSwiperArrowAbsolute } from "./style";

type TopSearchWorkKindCardProps = {
  occupation: OccupationsInfo;
};

type Props = TopSearchWorkKindCardProps;

const TopSearchWorkKindCard: FC<Props> = ({ occupation }) => {
  const navigate = useNavigate();

  const { name, count, items } = occupation;

  const titleAndCountText = `${name} (${count})件`;

  const joinedItemsName = items.map((item) => item.name).join("、");

  const onClickNavigate = () => {
    const querys = items.map((items) => `occ=${items.id}`).join("&");
    const url = `/jobs/search-result?${querys}`;
    navigate(url);
  };

  return (
    <SCard onClick={onClickNavigate}>
      <SCardInnerLeft>
        <SCardTitle>{titleAndCountText}</SCardTitle>
        <SClassificationName>{joinedItemsName}</SClassificationName>
      </SCardInnerLeft>
      <SCardInnerRight>
        <SSwiperArrowAbsolute>
          <SwiperArrow />
        </SSwiperArrowAbsolute>
      </SCardInnerRight>
    </SCard>
  );
};

export default TopSearchWorkKindCard;
