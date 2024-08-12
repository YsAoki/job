import { ChangeEvent, useState } from "react";
import { EMPTY_STRING } from "../constans/default";

const useSelect = (defaultValue: string = EMPTY_STRING) => {
  const [select, setSelect] = useState(defaultValue);
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return { select, setSelect, onChangeSelect };
};

export default useSelect;
