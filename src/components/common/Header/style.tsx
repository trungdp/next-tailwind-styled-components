import tw, { styled } from 'twin.macro';
import { MenuLink } from '$src/components/common';

export const Logo = styled(MenuLink)`
  ${tw`mx-0 text-3xl text-primary`}
`;

export const MainMenu = styled.nav`
  ${tw`items-center hidden text-lg text-gray-800 uppercase lg:flex`}
`;

export const NavBar = styled.div`
  ${tw`flex items-center`}
`;

export const MenuButton = styled.button`
  ${tw`flex flex-col lg:hidden`}
`;

export const StyledHeader = styled.header`
  ${tw`z-30 flex-col items-center w-full bg-white`}
`;

export const StatusBar = styled.div`
  ${tw`w-full bg-primary h-9`}
`;

export const HeaderMenu = styled.div`
  ${tw`container flex items-center justify-between h-24 mx-auto sm:h-32`}
`;

export const LogoWrapper = styled.div`
  ${tw`flex items-center text-3xl font-black text-gray-800 uppercase`}
`;
