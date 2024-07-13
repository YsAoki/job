import { ComponentPropsWithoutRef, FC } from "react";
import { STopHeroSearchFormLocationInput } from "./style";

type TopHeroSearchFormLocationInputProps = {
  userSelectedPrefecture: string;
  toggleShowModal: () => void;
};

type Props = TopHeroSearchFormLocationInputProps & ComponentPropsWithoutRef<"input">;

const TopHeroSearchFormLocationInput: FC<Props> = ({ userSelectedPrefecture = "", toggleShowModal, ...other }) => {
  return (
    <STopHeroSearchFormLocationInput
      value={userSelectedPrefecture}
      onClick={toggleShowModal}
      {...other}
    />
  );
};

export default TopHeroSearchFormLocationInput;
