import { FC } from "react";
import { EMPTY_STRING } from "../../../constans/default";
import { Prefecture } from "../../../types/apiJobs";
import { isEqual } from "../../../utils";
import Button from "../../atoms/Button";
import { SFlexBox, STitleText, SValueText } from "./style";

type SearchResultFormLocationProps = {
  toggleShowLocationModal: () => void;
  selectedPrefecture: Prefecture;
};

type Props = SearchResultFormLocationProps;

const SearchResultFormLocation: FC<Props> = ({ toggleShowLocationModal, selectedPrefecture }) => {
  const selectedPrefectureName = isEqual(EMPTY_STRING, selectedPrefecture.prefectureName)
    ? "未選択"
    : selectedPrefecture.prefectureName;

  // Propsとして必要な内容は、選択中の都道府県オブジェクトと、toggleのswitchのみ
  return (
    <SFlexBox>
      <STitleText>勤務地</STitleText>
      <SValueText>{selectedPrefectureName}</SValueText>
      <Button type="button" onClick={toggleShowLocationModal}>
        変更する
      </Button>
    </SFlexBox>
  );
};

export default SearchResultFormLocation;
