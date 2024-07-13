import { ComponentPropsWithoutRef, FC } from "react";
import ReactDOM from "react-dom";
import { SOverlay } from "./style";

type Props = ComponentPropsWithoutRef<"div">;

const Overlay: FC<Props> = ({ children, ...other }) => {
  return ReactDOM.createPortal(<SOverlay {...other}>{children}</SOverlay>, document.body);
};

export default Overlay;
