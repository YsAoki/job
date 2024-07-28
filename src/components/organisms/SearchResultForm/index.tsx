import { FC } from "react";
import useInput from "../../../hooks/useInput";
import { AggregationsInfo } from "../../../types/apiJobs";
import SearchResultFormKeyword from "../SearchResultFormKeyword";
import SearchResultFormLocation from "../SearchResultFormLocation";
import { SForm, SPaper } from "./style";

type SearchResultFormProps = {
  aggregationsInfo: AggregationsInfo;
};

type Props = SearchResultFormProps;

const SearchResultForm: FC<Props> = ({aggregationsInfo}) => {

  const { input: inputKeyword, onChangeInput: onChangeInputKeyword, setInput: setInputKeyword } = useInput("");

  

  return (
    <SPaper>
      <SForm>
        <SearchResultFormKeyword inputKeyword={inputKeyword} onChangeInputKeyword={onChangeInputKeyword} />
        <SearchResultFormLocation />
      </SForm>
    </SPaper>
  );
};

export default SearchResultForm;
