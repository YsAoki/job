import { ChangeEvent, ComponentPropsWithoutRef, FC } from "react";
import { STopHeroSearchFormKeywordInput } from "./style";

type TopHeroSearchFormKeywordInputProps = {
  keywordVal: string;
  onChangeKeywordVal: (e: ChangeEvent<HTMLInputElement>) => void;
};

type Props = TopHeroSearchFormKeywordInputProps & ComponentPropsWithoutRef<"input">;

const TopHeroSearchFormKeywordInput: FC<Props> = ({ keywordVal, onChangeKeywordVal, ...other }) => {
  return <STopHeroSearchFormKeywordInput value={keywordVal} onChange={onChangeKeywordVal} {...other}/>;
};

export default TopHeroSearchFormKeywordInput;
