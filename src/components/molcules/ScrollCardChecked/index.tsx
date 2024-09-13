import { ComponentPropsWithoutRef, FC } from "react";
import CheckBox from "../../atoms/CheckBox";
import { SCheckBoxMargin, SScrollCard, SScrollCardText } from "./style";

type ScrollCardProps = {
  isSelected: boolean;
};

type Props = ScrollCardProps & ComponentPropsWithoutRef<"li">;

const ScrollCardChecked: FC<Props> = ({ isSelected, children, ...other }) => {
  return (
    <SScrollCard {...other}>
      <SCheckBoxMargin>
        <CheckBox isSelected={isSelected} />
      </SCheckBoxMargin>
      <SScrollCardText>{children}</SScrollCardText>
    </SScrollCard>
  );
};

export default ScrollCardChecked;
