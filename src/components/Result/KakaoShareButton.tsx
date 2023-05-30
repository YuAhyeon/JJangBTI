import { useEffect } from 'react';
import kakaoShare from '../../utils/kakaoShare';
import { Button } from './ResultContent';

function KakaoShareButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Button onClick={kakaoShare} aria-label="카카오톡 공유 버튼" type="button">
      카카오톡 공유하기
    </Button>
  );
}

export default KakaoShareButton;
