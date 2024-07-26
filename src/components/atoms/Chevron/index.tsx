import { ComponentPropsWithoutRef, FC } from "react";
import { SChevron, SChevronWrapper } from "./style";

type Props = ComponentPropsWithoutRef<"div">;

const Chevron: FC<Props> = ({ ...other }) => {
  return (
    <SChevronWrapper {...other}>
      <SChevron />
    </SChevronWrapper>
  );
};

export default Chevron;
