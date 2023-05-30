import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Title from '../common/Title';
import URL from '../../constants/URL';
import buttonCSS from '../common/Button';
import totalScoreAtom from '../../recoil/atoms';
import KakaoShareButton from './KakaoShareButton';
import getMBTIImage from '../../utils/getMBTIImage';
import generateMBTI from '../../utils/generateMBTI';
import { Container, Subtitle } from '../../styles/shared';

function ResultContent() {
  const totalScore = useRecoilValue(totalScoreAtom);
  const resultMBTI = generateMBTI(totalScore);
  const image = getMBTIImage(resultMBTI);
  const navigate = useNavigate();

  const handleRetryTest = () => {
    navigate('/');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(URL.DEFAULT_URL);
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
      <KakaoShareButton />
      <Button
        onClick={handleDownloadImage}
        aria-label="결과 이미지 저장 버튼"
        type="button"
      >
        결과 이미지 저장하기
      </Button>
      <Button
        onClick={handleRetryTest}
        aria-label="테스트 다시하기 버튼"
        type="button"
      >
        테스트 다시하기
      </Button>
      <Button
        onClick={handleCopyLink}
        aria-label="테스트 링크 복사 버튼"
        type="button"
      >
        테스트 링크 복사하기
      </Button>
    </Container>
  );
}

const Image = styled.img`
  width: 100%;
  height: 680px;
  object-fit: contain;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  ${buttonCSS};
  height: 40px;
  margin: 10px 0;
  color: #000000;
  font-size: 25px;
  font-family: 'junghagsaeng';
  text-shadow: none;
`;

export default ResultContent;
