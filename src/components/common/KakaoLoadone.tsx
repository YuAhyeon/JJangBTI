import { useEffect } from 'react';

export function KakaoLoadone() {
  const loadKakao = () => {
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
    loadKakao();
  }, []);

  return <div className="adfit" />;
}

export function KakaoLoadtwo() {
  const loadKakao = () => {
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
    loadKakao();
  }, []);

  return <div className="adfit2" />;
}
