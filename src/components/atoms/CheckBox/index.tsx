import { ComponentPropsWithoutRef, FC } from "react";
import { SCheckBox, SCheckBoxSymbol } from "./style";

export type CheckBoxStyleProps = {
  $isSelected: boolean;
};

type CheckBoxProps = {
  isSelected: boolean;
};

type Props = CheckBoxProps & ComponentPropsWithoutRef<"input">;

const CheckBox: FC<Props> = ({ isSelected, ...other }) => {
  return (
    <SCheckBox $isSelected={isSelected} {...other}>
      <SCheckBoxSymbol $isSelected={isSelected} />
    </SCheckBox>
  );
};

export default CheckBox;
