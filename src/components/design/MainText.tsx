import { styled } from 'styled-components';

export const MainText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.spacings.md}px;
  text-align: justify;
  color: ${({theme}) => theme.colors.textSecondaryColor};
  margin: 0;
`;
