import { useEffect } from 'react';

export function KakaoLoadOne() {
  const handleLoadKakao = () => {
    const { VITE_UNIT_ID_ONE } = import.meta.env;
    const ins = document.createElement('ins');
    const scr = document.createElement('script');

    ins.className = 'kakao_ad_area';
    ins.style.display = 'none';
    ins.style.width = '100%';
    scr.async = true;
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '100');
    ins.setAttribute('data-ad-unit', VITE_UNIT_ID_ONE);

    const adfitElement = document.querySelector('.adfit');

    if (adfitElement) {
      adfitElement.appendChild(ins);
      adfitElement.appendChild(scr);
    }
  };

  useEffect(() => {
    handleLoadKakao();
  }, []);

  return <div className="adfit" />;
}

export function KakaoLoadTwo() {
  const handleLoadKakao = () => {
    const { VITE_UNIT_ID_TWO } = import.meta.env;
    const ins = document.createElement('ins');
    const scr = document.createElement('script');

    ins.className = 'kakao_ad_area';
    ins.style.display = 'none';
    ins.style.width = '100%';
    scr.async = true;
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '100');
    ins.setAttribute('data-ad-unit', VITE_UNIT_ID_TWO);

    const adfitElement = document.querySelector('.adfit2');

    if (adfitElement) {
      adfitElement.appendChild(ins);
      adfitElement.appendChild(scr);
    }
  };

  useEffect(() => {
    handleLoadKakao();
  }, []);

  return <div className="adfit2" />;
}

export function KakaoLoadThree() {
  const handleLoadKakao = () => {
    const { VITE_UNIT_ID_THREE } = import.meta.env;
    const ins = document.createElement('ins');
    const scr = document.createElement('script');

    ins.className = 'kakao_ad_area';
    ins.style.display = 'none';
    ins.style.width = '100%';
    scr.async = true;
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '100');
    ins.setAttribute('data-ad-unit', VITE_UNIT_ID_THREE);

    const adfitElement = document.querySelector('.adfit3');

    if (adfitElement) {
      adfitElement.appendChild(ins);
      adfitElement.appendChild(scr);
    }
  };

  useEffect(() => {
    handleLoadKakao();
  }, []);

  return <div className="adfit3" />;
}

export function KakaoLoadFour() {
  const handleLoadKakao = () => {
    const { VITE_UNIT_ID_FOUR } = import.meta.env;
    const ins = document.createElement('ins');
    const scr = document.createElement('script');

    ins.className = 'kakao_ad_area';
    ins.style.display = 'none';
    ins.style.width = '100%';
    scr.async = true;
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '100');
    ins.setAttribute('data-ad-unit', VITE_UNIT_ID_FOUR);

    const adfitElement = document.querySelector('.adfit4');

    if (adfitElement) {
      adfitElement.appendChild(ins);
      adfitElement.appendChild(scr);
    }
  };

  useEffect(() => {
    handleLoadKakao();
  }, []);

  return <div className="adfit4" />;
}
