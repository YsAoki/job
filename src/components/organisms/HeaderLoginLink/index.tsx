import { FC } from "react";
import LikeIcon from "../../../img/Icons/LikeIcon";
import NavLink from "../../atoms/NavLink";
import { SFlexBox } from "./style";

const HeaderLoginLink: FC = () => {
  return (
    <SFlexBox>
      <NavLink to={"/"}>
        <LikeIcon />
        気になる
      </NavLink>
      <NavLink to={"/"}>マイページ</NavLink>
    </SFlexBox>
  );
};

export default HeaderLoginLink;
