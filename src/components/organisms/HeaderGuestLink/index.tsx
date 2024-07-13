import { FC } from "react";
import NavLink from "../../atoms/NavLink";
import { SFlexBox } from "./style";

const HeaderGuestLink: FC = () => {
  return (
    <SFlexBox>
      <NavLink to={"/"} $fill={false}>
        ログイン
      </NavLink>
      <NavLink to={"/"}>新規会員登録</NavLink>
    </SFlexBox>
  );
};

export default HeaderGuestLink;
