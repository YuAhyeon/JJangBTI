import Title from '../common/Title';
import ProgressBar from '../common/ProgressBar';
import { Container, Subtitle } from '../../styles/shared';

function QuestionContent() {
  return (
    <Container>
      <Title />
      <ProgressBar value={8} />
      <Subtitle>
        산책하던 중 떡잎공원에서 <br />
        놀고 있는 떡잎마을 방범대가 보인다!
      </Subtitle>
    </Container>
  );
}

export default QuestionContent;
