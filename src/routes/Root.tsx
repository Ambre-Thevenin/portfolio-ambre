import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { Header } from '../components/common/Header';
import { ContentWrapper } from '../ContentWrapper';

export const Root = () => {
  return (
    <PageContainer>
      <Header />
      <ContentWrapper />
      <Outlet />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
`;
