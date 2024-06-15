import { FC } from "react";
import { SHeaderLogoLink, SHeaderLogoText } from "./style";

const HeaderLogo: FC = () => {
  return (
    <SHeaderLogoLink to={"/"}>
      <SHeaderLogoText>サンプル求人</SHeaderLogoText>
    </SHeaderLogoLink>
  );
};

export default HeaderLogo;
