import { styled } from 'styled-components';
import { FirstSection } from './sections/FirstSection';
// import { AboutSection } from './sections/AboutSection';
// import { PastExperiencesSection } from './sections/PastExperiencesSection';
import { ContactSection } from './sections/ContactSection';

export const ContentWrapper = () => {
  return (
    <Container>
      <FirstSection />
      {/* <AboutSection /> */}
      {/* <PastExperiencesSection /> */}
      <ContactSection />
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    align-items: center;
    justify-content: center;
    margin: 0 ${({ theme }) => theme.spacings.xl}px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    align-items: center;
    justify-content: left;
    margin: 0 ${({ theme }) => theme.spacings.xxs * 25}px;
  }
`;
