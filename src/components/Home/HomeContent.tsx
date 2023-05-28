import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from '../common/Title';
import buttonCSS from '../common/Button';
import MaengGuImage from '../../assets/Home.png';
import { Container, Subtitle } from '../../styles/shared';

function HomeContent() {
  return (
    <Container>
      <Title />
      <HomeImage src={MaengGuImage} alt="맹구 이미지" />
      <Subtitle>
        나와 비슷한 성향을 가진
        <br />
        짱구는 못말려 캐릭터는?
      </Subtitle>
      <Button to="/question">START</Button>
    </Container>
  );
}

const HomeImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 20px;
  border-radius: 5px;
`;

const Button = styled(Link)`
  ${buttonCSS};

  color: white;
  font-size: 30px;
  font-weight: bold;
  font-family: 'rose';

  padding-left: 34px;
  letter-spacing: 10px;
`;

export default HomeContent;
