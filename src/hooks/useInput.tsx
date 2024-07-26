import { ChangeEvent, useCallback, useState } from "react";

const useInput = (defaultValue: string = "") => {
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
