import { styled } from 'styled-components';

export const Title2 = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: ${({ theme }) => theme.spacings.xxs * 10};
  color: ${({theme}) => theme.colors.textSecondaryColor};
  margin: 0;
`;
