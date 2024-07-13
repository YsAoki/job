import { FC } from "react";
import HeaderGuestLink from "../HeaderGuestLink";
import HeaderLoginLink from "../HeaderLoginLink";
import { SLinkWrapper } from "./style";

type Props = {
  userIsLogin: boolean;
};

const HeaderLink: FC<Props> = ({ userIsLogin = false }) => {
  return <SLinkWrapper>{userIsLogin ? <HeaderLoginLink /> : <HeaderGuestLink />}</SLinkWrapper>;
};

export default HeaderLink;
