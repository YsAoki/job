import { ComponentPropsWithoutRef, FC } from "react";
import Container from "../../atoms/Container";
import HeaderLink from "../HeaderLink";
import HeaderLogo from "../HeaderLogo";
import { SFlexBox, SHeader } from "./style";

type HeaderProps = {
  userIsLogin: boolean;
};

type Props = HeaderProps & ComponentPropsWithoutRef<"header">;

const Header: FC<Props> = ({ userIsLogin = false, ...other }) => {
  return (
    <SHeader {...other}>
      <Container>
        <SFlexBox>
          <HeaderLogo />
          <HeaderLink userIsLogin={userIsLogin} />
        </SFlexBox>
      </Container>
    </SHeader>
  );
};

export default Header;
