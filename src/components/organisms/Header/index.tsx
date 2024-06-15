import { ComponentPropsWithoutRef, FC } from "react";
import Container from "../../atoms/Container";
import FlexBox from "../../atoms/FlexBox";
import HeaderLogo from "../../molcules/HeaderLogo";
import { SHeader } from "./style";

type HeaderProps = {
  isLogin: boolean;
};

type Props = HeaderProps & ComponentPropsWithoutRef<"header">;

const Header: FC<Props> = ({ isLogin = false, ...other }) => {
  return (
    <SHeader {...other}>
      <Container maxWidth="62.5rem">
        <FlexBox alignItems="center" justifyContent="space-between">
          <HeaderLogo />
          {isLogin && <p>ログイン中</p>}
          {isLogin || <p>未ログイン</p>}
        </FlexBox>
      </Container>
    </SHeader>
  );
};

export default Header;
