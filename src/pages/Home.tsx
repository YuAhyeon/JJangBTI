import styled from 'styled-components';
import MainContainer from '../styles/layout';
import logoSrc from '../assets/logo.png';
import Title from '../components/common/Title';
import Button from '../components/common/Button';
import { Logo, Container } from '../styles/shared';

function Home() {
  return (
    <MainContainer>
      <Logo src={logoSrc} alt="짱구 로고" />
      <Container>
        <Title />
        <Content>
          <Button />
        </Content>
      </Container>
    </MainContainer>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
