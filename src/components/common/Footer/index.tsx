import { ABOUT, BLOG, CONTACT, HOME } from '$src/paths';
import styled from 'styled-components';
import tw from 'twin.macro';
import { MenuLink } from '..';

export const StyledLink = styled(MenuLink)`
  ${tw`px-4 text-sm`}
`;

export const StyledFooter = styled.footer`
  ${tw`flex justify-center px-4 text-gray-100 bg-primary`}
`;

export const Container = styled.div`
  ${tw`container flex flex-col items-center justify-between pb-6 mt-6 md:flex-row`}
`;

export const FooterMenu = styled.div`
  ${tw`flex mt-4 md:m-0`}
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div>LOGO</div>
        <FooterMenu>
          <StyledLink href={HOME}>Home</StyledLink>
          <StyledLink href={ABOUT}>About</StyledLink>
          <StyledLink href={BLOG}>Blog</StyledLink>
          <StyledLink href={CONTACT}>Contact</StyledLink>
        </FooterMenu>
      </Container>
    </StyledFooter>
  );
};
export default Footer;
