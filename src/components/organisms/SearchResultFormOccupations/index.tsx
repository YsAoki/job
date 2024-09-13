import { FC } from "react";
import { Prefecture } from "../../../types/apiJobs";
import Button from "../../atoms/Button";
import { SFlexBox, STitleText } from "./style";

type SearchResultFormLocationProps = {
  toggleShowOccupationsModal: () => void;
  // selectedPrefecture: Prefecture;
};

type Props = SearchResultFormLocationProps;

const SearchResultFormOccupations: FC<Props> = ({ toggleShowOccupationsModal }) => {
  // Propsとして必要な内容は、選択中の都道府県オブジェクトと、toggleのswitchのみ
  return (
    <SFlexBox>
      <STitleText>職種</STitleText>
      {/* <SValueText>{selectedPrefectureName}</SValueText> */}
      <Button type="button" onClick={toggleShowOccupationsModal}>
        変更する
      </Button>
    </SFlexBox>
  );
};

export default SearchResultFormOccupations;
