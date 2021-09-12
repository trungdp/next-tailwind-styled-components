import {
  StyledHeader,
  StatusBar,
  HeaderMenu,
  LogoWrapper,
  Logo,
  NavBar,
  MainMenu,
  MenuButton,
} from './style';

import { MenuOutlined } from '@ant-design/icons';
import { MenuLink } from '$src/components/common';
import { ABOUT, BLOG, CONTACT, HOME } from '$src/paths';

const Header = () => {
  return (
    <StyledHeader>
      <StatusBar />
      <HeaderMenu>
        <LogoWrapper>
          <Logo href='/'>LOGO</Logo>
        </LogoWrapper>
        <NavBar>
          <MainMenu>
            <MenuLink href={HOME}>Home</MenuLink>
            <MenuLink href={BLOG}>Blog</MenuLink>
            <MenuLink href={ABOUT}>About</MenuLink>
            <MenuLink href={CONTACT}>Contact</MenuLink>
          </MainMenu>
          <MenuButton>
            <MenuOutlined />
          </MenuButton>
        </NavBar>
      </HeaderMenu>
    </StyledHeader>
  );
};
export default Header;
