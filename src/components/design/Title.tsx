import { styled } from 'styled-components';

export const Title = styled.h1`
  font-family: 'Fraunces', serif;
  font-weight: 600;
  font-size: ${({ theme }) => theme.spacings.xxxl * 2}px;
  color: ${({ theme }) => theme.colors.memojiBackground};
  margin: 0;
`;
