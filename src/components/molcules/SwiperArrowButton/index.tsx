import { ComponentPropsWithoutRef, FC } from "react";
import SwiperArrow from "../../atoms/SwiperArrow";
import { SRotateBox, SSwiperArrowButton } from "./style";

export type SwiperArrowButtonStyleProps = {
  $directionIsRight: boolean;
};

type SwiperArrowButtonProps = {
  direction?: "right" | "left";
};

type Props = SwiperArrowButtonProps & ComponentPropsWithoutRef<"button">;

const SwiperArrowButton: FC<Props> = ({ direction = "right", ...other }) => {
  const directionIsRight = direction === "right";

  return (
    <SSwiperArrowButton {...other} $directionIsRight={directionIsRight}>
      <SRotateBox $directionIsRight={directionIsRight}>
        <SwiperArrow />
      </SRotateBox>
    </SSwiperArrowButton>
  );
};

export default SwiperArrowButton;
