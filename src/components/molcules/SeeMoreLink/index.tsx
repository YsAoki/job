import { FC } from "react";
import { NavLinkProps } from "react-router-dom";
import NavLink from "../../atoms/NavLink";

type Props = Omit<NavLinkProps, "className" | "style">;

const SeeMoreLink: FC<Props> = ({ to, ...other }) => {
  return (
    <NavLink to={to} {...other}>
      もっと見る
    </NavLink>
  );
};

export default SeeMoreLink;
