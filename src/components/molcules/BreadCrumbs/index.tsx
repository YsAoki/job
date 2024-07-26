import React, { cloneElement, FC, isValidElement } from "react";
import Chevron from "../../atoms/Chevron";
import { SFlexBox } from "./style";

type BreadCrumbsProps = {
  list: React.ReactNode[];
};

type Props = BreadCrumbsProps;

const BreadCrumbs: FC<Props> = ({ list }) => {
  // Propsで受け取った配列の子要素にkeyプロパティを追加
  const arr = list.map((item, index) => {
    if (isValidElement(item)) {
      return cloneElement(item, { key: `item${index}` });
    }
  });

  // propsで受け取った配列の子要素間に、「>」を追加。パンくずリストで表示する。
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (i < arr.length - 1) {
      newArr.push(<Chevron key={`chevron${i}`} />);
    }
  }

  return <SFlexBox>{newArr}</SFlexBox>;
};

export default BreadCrumbs;
