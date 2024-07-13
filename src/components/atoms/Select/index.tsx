import { ComponentPropsWithoutRef, FC } from "react";
import { isEqual } from "../../../utils";
import { SSelect } from "./style";

export type SelectStyleProps = {
  $valueIsDefault: boolean;
};

type SelectProps = {
  defaultValue: string | number | readonly string[] | undefined;
  selectedValue: string;
};

type Props = SelectProps & ComponentPropsWithoutRef<"select">;

const Select: FC<Props> = ({ defaultValue, selectedValue, children, ...other }) => {
  const valueIsDefault = isEqual(defaultValue, selectedValue);

  return (
    <SSelect $valueIsDefault={valueIsDefault} {...other}>
      {children}
    </SSelect>
  );
};

export default Select;
