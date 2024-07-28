import { ChangeEvent, FC } from "react";
import { SFlexBox, SInput, STitleText } from "./styled";

type SearchResultFormKeyword = {
  inputKeyword: string;
  onChangeInputKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
};

type Props = SearchResultFormKeyword;

const SearchResultFormKeyword: FC<Props> = ({ inputKeyword, onChangeInputKeyword }) => {
  return (
    <SFlexBox>
      <STitleText tag="h4">フリーワード</STitleText>
      <SInput value={inputKeyword} onChange={onChangeInputKeyword} placeholder="キーワード" />
    </SFlexBox>
  );
};

export default SearchResultFormKeyword;
