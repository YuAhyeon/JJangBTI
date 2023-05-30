function kakaoShare() {
  const { VITE_SHARE_KAKAO_KEY } = import.meta.env;

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(VITE_SHARE_KAKAO_KEY);
    }

    window.Kakao.Link.sendCustom({
      templateId: 94409,
    });
  }
}

export default kakaoShare;
