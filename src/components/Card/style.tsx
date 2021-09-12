import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { Typography } from 'antd';

const { Link, Paragraph } = Typography;

export const StyledImage = styled(Image)`
  ${tw`hidden object-cover w-10 h-10 pr-2 rounded-full sm:block`}
`;

export const StyledCard = styled.div`
  ${tw`px-10 py-6 mx-auto mt-6 bg-white rounded-lg shadow-md`}
`;

export const StyledParagraph = styled(Paragraph)`
  ${tw`mt-2 text-left text-gray-600`}
`;

export const StyledLink = styled(Link)`
  ${tw`flex items-center text-base font-bold text-gray-700 cursor-pointer`}
`;

export const Readmore = styled(StyledLink)`
  ${tw`text-primary`}
`;

export const Content = styled.div`
  ${StyledLink} {
    ${tw`text-xl`}
  }
`;

export const Meta = styled.div`
  ${tw`flex items-center justify-between mt-4`}
`;
