import { useState } from 'react';
import { styled } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

import buttonCSS from '../common/Button';
import ProgressBar from '../common/ProgressBar';
import { Container, Subtitle } from '../../styles/shared';

interface TotalScore {
  EI: number;
  SN: number;
  TF: number;
  JP: number;
  [key: string]: number;
}

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
  const { questionId } = useParams() as { questionId: string };
  const [totalScore, setTotalScore] = useState<TotalScore>({
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  });
  const navigate = useNavigate();

  console.log(totalScore);

  const handleClick = (buttonType: string) => {
    if (buttonType === 'A') {
      console.log(questionData.type);
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

const Button = styled.button`
  ${buttonCSS};
  height: 80px;
  margin: 10px 0;
  font-size: 21px;
  color: #ffffff;
  letter-spacing: 1.5px;
  font-family: 'junghagsaeng';
`;

export default QuestionContent;
