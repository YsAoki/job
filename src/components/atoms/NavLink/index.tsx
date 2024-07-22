import { FC } from "react";
import { LinkProps } from "react-router-dom";
import { SNavLink } from "./style";

type NavLinkProps = {
  fill?: boolean;
};

export type NavLinkStyleProps = {
  $fill?: boolean;
};

type Props = NavLinkProps & Omit<LinkProps, "className">;

const NavLink: FC<Props> = ({ fill = true, children, ...other }) => {
  return (
    <SNavLink $fill={fill} {...other}>
      {children}
    </SNavLink>
  );
};

export default NavLink;
