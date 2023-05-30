import { Outlet } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import KakaoLoadone from '../components/common/KakaoLoadone';

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
      <KakaoLoadone />
    </>
  );
}
