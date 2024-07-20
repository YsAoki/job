import { FC } from "react";
import { OccupationsInfo } from "../../../types/apiJobs";
import SwiperArrow from "../../atoms/SwiperArrow";
import { SCard, SCardInnerLeft, SCardInnerRight, SCardTitle, SClassificationName, SSwiperArrowAbsolute } from "./style";

type TopSearchWorkKindCardProps = {
  occupation: OccupationsInfo;
};

type Props = TopSearchWorkKindCardProps;

const TopSearchWorkKindCard: FC<Props> = ({ occupation }) => {
  const { classificationId, name, count, items } = occupation;

  const titleAndCountText = `${name} (${count})件`;

  const joinedItemsName = items.map((item) => item.name).join("、");

  return (
    <SCard>
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
