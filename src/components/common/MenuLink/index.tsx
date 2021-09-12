import { default as NextLink } from 'next/link';
import tw from 'twin.macro';

const StyledTitle = tw.a`my-2 mx-6 flex cursor-pointer`;

const MenuLink = (props: any) => {
  return (
    <NextLink {...props}>
      <StyledTitle>{props.children}</StyledTitle>
    </NextLink>
  );
};

export default MenuLink;
