import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import Memoji from '../assets/memoji.png';
import { Title } from '../components/design/Title';
import { Title3 } from '../components/design/Title3';
import { MainText } from '../components/design/MainText';

export const FirstSection = () => {
  return (
    <Container>
      <MemojiContainer>
        <MemojiBackground />
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <div style={{ position: 'relative', zIndex: 1 }}>
            <img src={Memoji} width={300} height={300} />
          </div>
        </motion.div>
      </MemojiContainer>
      <TextContainer>
        <Title>Ambre Thevenin</Title>
        <Subtitle>Web & Mobile Developer</Subtitle>
        <MainText>Typescript - React / React Native - Node.js - GraphQL</MainText>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacings.xxs * 50}px;
  }
`;

const Subtitle = styled(Title3)`
  font-size: ${({ theme }) => theme.spacings.xxl}px;
  margin-bottom: ${({ theme }) => theme.spacings.xxs}px;
  color: ${({theme}) => theme.colors.textSecondaryColor}
`;

const MemojiContainer = styled.div`
  margin: 0 ${({ theme }) => theme.spacings.xxl}px;
`;

const MemojiBackground = styled.div`
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 300px;
  border: 4px dashed ${({ theme }) => theme.colors.memojiBackground};
  position: absolute;
  left: 230px;
  top: 230px;
`;
const TextContainer = styled.div`
  margin: 0;
`;
