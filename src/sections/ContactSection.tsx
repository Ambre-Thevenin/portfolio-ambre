import { styled, useTheme } from 'styled-components';
import { Title2 } from '../components/design/Title2';
import { ContactIcons } from '../components/common/ContactIcons';

export const ContactSection = () => {
  const theme = useTheme();

  return (
    <Container>
      <Title2>I'm still adding bits and bobs to this page. In the meantime, let's work together ! You can reach me here </Title2>
      <ContactIcons color={theme.colors.textPrimaryColor} iconSize={theme.spacings.xxs * 10} />
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
