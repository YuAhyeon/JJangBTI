import styled from 'styled-components';
import logoSrc from '../assets/logo.png';
import MaengGuImage from '../assets/Home.png';
import MainContainer from '../styles/layout';
import Title from '../components/common/Title';
import buttonCSS from '../components/common/Button';
import { Logo, Container, Subtitle } from '../styles/shared';

function Home() {
  return (
    <MainContainer>
      <Logo src={logoSrc} alt="짱구 로고" />
      <Container>
        <Title />
        <HomeImage src={MaengGuImage} alt="맹구 이미지" />
        <Subtitle>
          나와 비슷한 성향을 가진
          <br />
          짱구는 못말려 캐릭터는?
        </Subtitle>
        <Button>START</Button>
      </Container>
    </MainContainer>
  );
}

const HomeImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  ${buttonCSS};

  color: white;
  font-size: 30px;
  font-weight: bold;

  padding-left: 34px;
  letter-spacing: 10px;
`;

export default Home;
