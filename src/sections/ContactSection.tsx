import { styled, useTheme } from 'styled-components';
import { Title2 } from '../components/design/Title2';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import GithubIcon from '../components/icons/GithubIcon';
import MailIcon from '../components/icons/MailIcon';
import { Link } from 'react-router-dom';
import { MainText } from '../components/design/MainText';

export const ContactSection = () => {
  const theme = useTheme();

  return (
    <Container>
      <Title2>I'm still adding bits and bobs to this page. In the meantime, let's work together ! You can reach me here </Title2>
      <IconsContainer>
        <Link to="https://www.linkedin.com/in/ambrethevenin/" target="_blank" rel="noreferrer">
          <LinkedinIcon color={theme.colors.textPrimaryColor} width={theme.spacings.xxs * 10} />
        </Link>
        <Link to="https://github.com/Ambre-Thevenin" target="_blank" rel="noreferrer">
          <GithubIcon color={theme.colors.textPrimaryColor} width={theme.spacings.xxs * 10} />
        </Link>
        <Link to="mailto:ambre.thvn@gmail.com?subject=Ambre, Lets work together" target="_blank" rel="noreferrer">
          <MailIcon color={theme.colors.textPrimaryColor} width={theme.spacings.xxs * 10} />
        </Link>
        <Link to="https://drive.google.com/file/d/1nJxGZ6hPo8M6nVpJ7hTXjrNWXJjOo299/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none'}}>
          <CVLink>CV</CVLink>
        </Link>
      </IconsContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.lg}px;
  margin-top: ${({ theme }) => theme.spacings.xxs * 20}px;
  margin-bottom: ${({ theme }) => theme.spacings.xxl}px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.sm}px;
  margin-right: ${({ theme }) => theme.spacings.md}px;
`;

const CVLink = styled(MainText)`
  font-size: ${({ theme }) => theme.spacings.xxxl}px;
  color: ${({theme}) => theme.colors.textPrimaryColor}
`;