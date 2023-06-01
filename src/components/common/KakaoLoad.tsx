import { useEffect } from 'react';

const handleLoadKakao = (unitID: string) => {
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
  ins.setAttribute('data-ad-unit', unitID);

  const adfitElement = document.querySelector('.adfit');

  if (adfitElement) {
    adfitElement.appendChild(ins);
    adfitElement.appendChild(scr);
  }
};
export function KakaoLoadOne() {
  const { VITE_UNIT_ID_ONE } = import.meta.env;

  useEffect(() => {
    handleLoadKakao(VITE_UNIT_ID_ONE);
  }, []);

  return <div className="adfit" />;
}

export function KakaoLoadTwo() {
  const { VITE_UNIT_ID_TWO } = import.meta.env;

  useEffect(() => {
    handleLoadKakao(VITE_UNIT_ID_TWO);
  }, []);

  return <div className="adfit" />;
}

export function KakaoLoadThree() {
  const { VITE_UNIT_ID_THREE } = import.meta.env;

  useEffect(() => {
    handleLoadKakao(VITE_UNIT_ID_THREE);
  }, []);

  return <div className="adfit" />;
}

export function KakaoLoadFour() {
  const { VITE_UNIT_ID_FOUR } = import.meta.env;

  useEffect(() => {
    handleLoadKakao(VITE_UNIT_ID_FOUR);
  }, []);

  return <div className="adfit" />;
}
