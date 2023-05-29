import Logo from '../components/common/Logo';
import MainContainer from '../styles/layout';
import QuestionData from '../assets/data/questionData';
import QuestionContent from '../components/Question/QuestionContent';

function Question() {
  return (
    <MainContainer>
      <Logo />
      {QuestionData.map((question) => (
        <QuestionContent key={question.id} questionData={question} />
      ))}
    </MainContainer>
  );
}

export default Question;
