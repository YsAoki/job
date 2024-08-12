import { ChangeEvent, useCallback, useState } from "react";
import { EMPTY_STRING } from "../constans/default";

const useInput = (defaultValue: string = EMPTY_STRING) => {
  const [input, setInput] = useState(defaultValue);
  const onChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    },
    [setInput]
  );

  return { input, setInput, onChangeInput };
};

export default useInput;
