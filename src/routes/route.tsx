import { Outlet } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import { KakaoLoadone, KakaoLoadtwo } from '../components/common/KakaoLoad';

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <KakaoLoadone />
      <Outlet />
      <KakaoLoadtwo />
    </>
  );
}
