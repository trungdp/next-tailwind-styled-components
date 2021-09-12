import {
  StyledCard,
  Content,
  StyledLink,
  StyledParagraph,
  Meta,
  Readmore,
  StyledImage,
} from './style';

const Card = ({ id, description, title, image }: any) => {
  return (
    <StyledCard key={id}>
      <Content>
        <StyledLink href='#'>{title}</StyledLink>
        <StyledParagraph>{description}</StyledParagraph>
      </Content>
      <Meta>
        <Readmore>Read more</Readmore>
        <StyledLink href='#'>
          <StyledImage src={image} alt='avatar' width='40' height='40' />
          Alex John
        </StyledLink>
      </Meta>
    </StyledCard>
  );
};
export default Card;
