import React, { FC } from "react";
import { SContainer } from "./style";

export type ContainerProps = {
  width?: string;
  maxWidth?: string;
};

type Props = ContainerProps & React.ComponentPropsWithoutRef<"div">;

const Container: FC<Props> = ({ maxWidth = "80rem", width = "100%", children, ...other }) => {
  return (
    <SContainer $width={width} $maxWidth={maxWidth} {...other}>
      {children}
    </SContainer>
  );
};

export default Container;
