import { FC } from "react";
import { LinkProps } from "react-router-dom";
import { SNavLink } from "./style";

type Props = LinkProps;

const NavLink: FC<Props> = ({ children, ...other }) => {
  return <SNavLink {...other}>{children}</SNavLink>;
};

export default NavLink;
