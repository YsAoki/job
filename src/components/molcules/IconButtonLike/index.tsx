import { ComponentPropsWithoutRef, FC } from "react";
import LikeIcon from "../../../img/Icons/LikeIcon";
import { ButtonProps } from "../../atoms/Button";
import IconButton from "../IconButton";

type Props = ButtonProps & ComponentPropsWithoutRef<"button">;

const IconButtonLike: FC<Props> = ({ $width ="auto", ...other }) => {
  return (
    <IconButton icon={<LikeIcon />} $width={$width} {...other}>
      気になる
    </IconButton>
  );
};

export default IconButtonLike;
