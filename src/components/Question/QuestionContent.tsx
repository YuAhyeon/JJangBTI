import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import totalScoreAtom from '../../recoil/atoms';

import buttonCSS from '../common/Button';
import ProgressBar from '../common/ProgressBar';
import { Container, Subtitle } from '../../styles/shared';

interface Question {
  id: number;
  title: string;
  image: string;
  answerA: string;
  answerB: string;
  gauge: number;
  type: string;
}

interface QuestionData {
  questionData: Question;
}

function QuestionContent({ questionData }: QuestionData) {
  const [, setTotalScore] = useRecoilState(totalScoreAtom);

  const { questionId } = useParams() as { questionId: string };
  const navigate = useNavigate();

  const handleClick = (buttonType: string) => {
    if (buttonType === 'A') {
      setTotalScore((prev) => ({
        ...prev,
        [questionData.type]: prev[questionData.type] + 1,
      }));
    }

    if (questionData.id === 12) {
      navigate(`/result`);
    } else {
      navigate(`/question/${String(questionData.id + 1)}`);
    }
  };

  if (Number(questionId) === questionData.id) {
    return (
      <Container>
        <ProgressBar value={(questionData.id / 12) * 100} />
        <Stage>{`${questionData.id}/12`}</Stage>
        <Subtitle>{questionData.title}</Subtitle>
        <QuestionImage src={questionData.image} />
        <Button
          aria-label="답변 A 버튼"
          type="button"
          onClick={() => handleClick('A')}
        >
          {questionData.answerA}
        </Button>
        <Button
          aria-label="답변 B 버튼"
          type="button"
          onClick={() => handleClick('B')}
        >
          {questionData.answerB}
        </Button>
      </Container>
    );
  }
  return null;
}

const QuestionImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 3px;
  margin-bottom: 30px;
`;

const Stage = styled.p`
  margin-top: 10px;
  color: var(--black);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 5px;
  font-family: 'junghagsaeng';
`;

const Button = styled.button`
  ${buttonCSS};
  height: 80px;
  margin: 10px 0;
  font-size: 22px;
  color: #000000;
  letter-spacing: 1.5px;
  font-family: 'junghagsaeng';
  text-shadow: none;
`;

export default QuestionContent;
