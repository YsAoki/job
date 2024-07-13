import { useState } from "react";

const useToggle = (defaultValue: boolean = false) => {
  const [toggle, setToggle] = useState(defaultValue);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  const changeToTrue = () => {
    setToggle(true);
  };
  const changeToFalse = () => {
    setToggle(false);
  };
  return { toggle, changeToFalse, changeToTrue, changeToggle };
};

export default useToggle;
