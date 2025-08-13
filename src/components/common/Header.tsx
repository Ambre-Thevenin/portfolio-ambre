import { styled, useTheme } from 'styled-components';
import { Title } from '../design/Title';
import LinkedinIcon from '../icons/LinkedinIcon';
import GithubIcon from '../icons/GithubIcon';
import MailIcon from '../icons/MailIcon';

export const Header = () => {
  const theme = useTheme();

  return (
    <Container>
      <TitleContainer>
        <Name>Ambre Thévenin</Name>
      </TitleContainer>
      <IconsContainer>
        <a href="https://www.linkedin.com/in/ambrethevenin/" target="_blank" rel="noreferrer">
          <LinkedinIcon color={theme.colors.lightText} width={'1.5em'} />
        </a>
        <a href="https://github.com/Ambre-Thevenin" target="_blank" rel="noreferrer">
          <GithubIcon color={theme.colors.lightText} width={'1.5em'} />
        </a>
        <a href="mailto:ambre.thvn@gmail.com?subject=Ambre, Lets work together" target="_blank" rel="noreferrer">
          <MailIcon color={theme.colors.lightText} width={'1.5em'} />
        </a>
      </IconsContainer>
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

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.sm}px;
  margin-right: ${({ theme }) => theme.spacings.md}px;
`;
