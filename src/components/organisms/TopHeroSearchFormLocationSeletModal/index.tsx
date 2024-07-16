import { FC } from "react";
import { PREFECTURE_DEFAULT } from "../../../constatns";
import { LocationInfo, Prefecture } from "../../../types/apiJobs";
import { isEqual } from "../../../utils";
import Button from "../../atoms/Button";
import Overlay from "../../atoms/Overlay";
import ScrollCard from "../../molcules/ScrollCard";
import {
  SButtonWrapper,
  SCategoryTitle,
  SContainer,
  SPaperBox,
  SScrollBox,
  SSelectArea,
  SSelectAreaWrapper,
  STitleText,
} from "./style";

type TopHeroSearchFormLocationSelectModalProps = {
  locations?: LocationInfo[];
  userSelectedRegionId: string;
  setUserSelectedRegionId: (regionId: string) => void;
  userSelectedPrefecture: Prefecture;
  setUserSelectedPrefecture: (prefecture: Prefecture) => void;
  toggleShowModal: () => void;
};

type Props = TopHeroSearchFormLocationSelectModalProps;

const TopHeroSearchFormLocationSelectModal: FC<Props> = ({
  locations,
  userSelectedRegionId,
  setUserSelectedRegionId,
  userSelectedPrefecture,
  setUserSelectedPrefecture,
  toggleShowModal,
}) => {
  const handleRegionClick = (regionId: string) => {
    setUserSelectedRegionId(regionId);
  };

  // 選択されている地方名が持つ県一覧をレンダリングごとに生成。
  const selectedRegionPrefectures = locations?.find((region) => isEqual(region.regionId, userSelectedRegionId));

  const handlePrefectureClick = (prefecture: Prefecture) => {
    setUserSelectedPrefecture(prefecture);
  };

  const onClickReset = () => {
    toggleShowModal();
    setUserSelectedRegionId("");
    setUserSelectedPrefecture(PREFECTURE_DEFAULT);
  };

  return (
    <>
      <Overlay onClick={toggleShowModal}>
        <SPaperBox onClick={(e) => e.stopPropagation()}>
          <SContainer>
            <STitleText tag="h3">勤務地</STitleText>
            <SSelectAreaWrapper>
              <SSelectArea>
                <SCategoryTitle>地域を選択</SCategoryTitle>
                <SScrollBox>
                  {locations?.map((region) => (
                    <ScrollCard
                      key={region.regionId}
                      isSelected={isEqual(region.regionId, userSelectedRegionId)}
                      onClick={() => handleRegionClick(region.regionId)}
                    >
                      {region.regionName}
                    </ScrollCard>
                  ))}
                </SScrollBox>
              </SSelectArea>
              <SSelectArea>
                <SCategoryTitle>都道府県を選択</SCategoryTitle>
                <SScrollBox>
                  {selectedRegionPrefectures?.prefectures.map((prefecture) => (
                    <ScrollCard
                      key={prefecture.prefectureId}
                      isSelected={isEqual(prefecture.prefectureId, userSelectedPrefecture.prefectureId)}
                      onClick={() => handlePrefectureClick(prefecture)}
                    >
                      {prefecture.prefectureName}
                    </ScrollCard>
                  ))}
                </SScrollBox>
              </SSelectArea>
            </SSelectAreaWrapper>
            <SButtonWrapper>
              <Button onClick={onClickReset}>リセット</Button>
              <Button fill={true} onClick={toggleShowModal}>
                決定
              </Button>
            </SButtonWrapper>
          </SContainer>
        </SPaperBox>
      </Overlay>
    </>
  );
};

export default TopHeroSearchFormLocationSelectModal;
