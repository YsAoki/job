import { ComponentPropsWithoutRef, FC } from "react";
import Image from "../../atoms/Image";
import { SImageBox } from "./style";

export type ImageBoxProps = {
  $width: string;
  $height: string;
};

type Props = ImageBoxProps & ComponentPropsWithoutRef<"img">;

const ImageBox: FC<Props> = ({ $width = "100%", $height = "auto", ...other }) => {
  return (
    <SImageBox $height={$height} $width={$width}>
      <Image {...other} />
    </SImageBox>
  );
};

export default ImageBox;
