import styled from 'styled-components';
import Title from '../common/Title';
import { Container, Subtitle } from '../../styles/shared';
import buttonCSS from '../common/Button';

function ResultContent() {
  return (
    <Container>
      <Title />
      <Subtitle>
        나와 비슷한 성향을 가진
        <br />
        짱구는 못말려 캐릭터는?
      </Subtitle>
      <Image src="https://velog.velcdn.com/images/youa7878/post/f5a163c3-0c91-471f-afd1-9c9f29e2d7ae/image.png" />
      <Button>결과 이미지 저장하기</Button>
      <Button>테스트 다시하기</Button>
      <Button>테스트 링크 복사하기</Button>
    </Container>
  );
}

const Image = styled.img`
  width: 100%;
  height: 680px;
  object-fit: cover;
  margin-bottom: 30px;
`;

const Button = styled.button`
  ${buttonCSS};
  height: 40px;
  margin: 10px 0;
  color: white;
  font-size: 25px;
  font-family: 'junghagsaeng';
`;

export default ResultContent;
