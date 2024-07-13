import { FC } from "react";
import { LinkProps } from "react-router-dom";
import { SListWrapper, SNavLink } from "./style";

type NavLinkProps = {
  fill?: boolean;
};

export type NavLinkStyleProps = {
  $fill?: boolean;
};

type Props = NavLinkProps & LinkProps;

const NavLink: FC<Props> = ({ fill = true, children, ...other }) => {
  return (
    <SListWrapper style={{ display: "inline-block" }}>
      <SNavLink $fill={fill} {...other}>
        {children}
      </SNavLink>
    </SListWrapper>
  );
};

export default NavLink;
