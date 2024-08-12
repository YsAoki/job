import { ComponentPropsWithoutRef, FC } from "react";
import { EMPTY_STRING } from "../../../constans/default";
import { STopHeroSearchFormLocationInput } from "./style";

type TopHeroSearchFormLocationInputProps = {
  userSelectedPrefecture: string;
  toggleShowModal: () => void;
};

type Props = TopHeroSearchFormLocationInputProps & ComponentPropsWithoutRef<"input">;

const TopHeroSearchFormLocationInput: FC<Props> = ({
  userSelectedPrefecture = EMPTY_STRING,
  toggleShowModal,
  ...other
}) => {
  return <STopHeroSearchFormLocationInput value={userSelectedPrefecture} onClick={toggleShowModal} {...other} />;
};

export default TopHeroSearchFormLocationInput;
