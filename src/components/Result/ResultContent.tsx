import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import Title from '../common/Title';
import { Container, Subtitle } from '../../styles/shared';
import buttonCSS from '../common/Button';
import totalScoreAtom from '../../recoil/atoms';
import generateMBTI from '../../utils/generateMBTI';
import getMBTIImage from '../../utils/getMBTIImage';

function ResultContent() {
  const totalScore = useRecoilValue(totalScoreAtom);
  const resetTotalScore = useResetRecoilState(totalScoreAtom);
  const resultMBTI = generateMBTI(totalScore);
  const image = getMBTIImage(resultMBTI);
  const navigate = useNavigate();

  const handleRetryTest = () => {
    resetTotalScore();
    navigate('/');
  };

  const copyLink = 'https://github.com/youa7878';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(copyLink);
    toast.info('링크가 복사되었습니다.', { autoClose: 2000 });
  };

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.href = image;
    const matchResult = image.match(/[A-Z]{4}/);
    link.download = matchResult ? matchResult[0] : 'mbti';
    link.click();
  };

  return (
    <Container>
      <Title />
      <Subtitle>
        나와 비슷한 성향을 가진
        <br />
        짱구는 못말려 캐릭터는?
      </Subtitle>
      <Image src={image} />
      <Button onClick={handleDownloadImage}>결과 이미지 저장하기</Button>
      <Button onClick={handleRetryTest}>테스트 다시하기</Button>
      <Button onClick={handleCopyLink}>테스트 링크 복사하기</Button>
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
