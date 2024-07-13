import { useState } from "react";

const useHoldingData = <T,>(defaultValue: T) => {
  const [holdingData, setHoldingData] = useState<T>(defaultValue);
  const holdingDataIsDefault = holdingData === defaultValue;

  return { holdingData, setHoldingData,holdingDataIsDefault };
};

export default useHoldingData;
