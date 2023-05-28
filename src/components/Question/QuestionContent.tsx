import { styled } from 'styled-components';
import Title from '../common/Title';
import ProgressBar from '../common/ProgressBar';
import { Container, Subtitle } from '../../styles/shared';
import QuestionImageSrc from '../../assets/question-images/Question1.png';
import buttonCSS from '../common/Button';

function QuestionContent() {
  return (
    <Container>
      <Title />
      <ProgressBar value={8} />
      <Subtitle>질문</Subtitle>
      <QuestionImage src={QuestionImageSrc} />
      <Button aria-label="답변 버튼" type="button">
        1
      </Button>
      <Button aria-label="답변 버튼" type="button">
        2
      </Button>
    </Container>
  );
}

const QuestionImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 3px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  ${buttonCSS};
  height: 80px;
  margin: 10px 0;
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 1px;
`;

export default QuestionContent;
