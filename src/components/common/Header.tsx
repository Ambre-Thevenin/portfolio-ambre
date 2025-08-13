import { styled, useTheme } from 'styled-components';
import { Title } from '../design/Title';
import { ContactIcons } from '../common/ContactIcons';

export const Header = () => {
  const theme = useTheme();

  return (
    <Container>
      <TitleContainer>
        <Name>Ambre Thévenin</Name>
      </TitleContainer>

      <ContactIcons color={theme.colors.lightText} iconSize={'1.5em'} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  height: auto;
  border-bottom-left-radius: ${({ theme }) => theme.spacings.xs}px;
  border-bottom-right-radius: ${({ theme }) => theme.spacings.xs}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBackgroundColor};
  padding: ${({ theme }) => theme.spacings.xs}px;
`;

const TitleContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacings.md}px;
  display: flex;
  align-items: center;
`;

const Name = styled(Title)`
  font-size: 1.2em;
  color: ${({ theme }) => theme.colors.lightText};
`;

