import { styled } from 'styled-components';

export const Title3 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.spacings.xxs * 10};
  color: ${({theme}) => theme.colors.textSecondaryColor};
  margin: 0;
`;
