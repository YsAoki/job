import { ChangeEvent, useState } from "react";

const useSelect = (defaultValue: string = "") => {
  const [select, setSelect] = useState(defaultValue);
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return { select, setSelect, onChangeSelect };
};

export default useSelect;
