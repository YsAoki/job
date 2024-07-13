import { ComponentPropsWithoutRef, FC } from "react";
import IsSelected from "../../atoms/IsSelected";
import { SScrollCard, SScrollCardText } from "./style";

type ScrollCardProps = {
  isSelected: boolean;
};

type Props = ScrollCardProps & ComponentPropsWithoutRef<"li">;

const ScrollCard: FC<Props> = ({ isSelected, children, ...other }) => {
  return (
    <SScrollCard {...other}>
      <SScrollCardText>{children}</SScrollCardText>
      {isSelected && <IsSelected />}
    </SScrollCard>
  );
};

export default ScrollCard;
