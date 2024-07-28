import { FC } from "react";
import Button from "../../atoms/Button";
import { SFlexBox, STitleText, SValueText } from "./style";

const SearchResultFormLocation: FC = () => {
  
  return (
    <SFlexBox>
      <STitleText>勤務地</STitleText>
      <SValueText>東京</SValueText>
      <Button>変更する</Button>
    </SFlexBox>
  );
};

export default SearchResultFormLocation;
