import { Outlet } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import {
  KakaoLoadOne,
  KakaoLoadTwo,
  KakaoLoadThree,
} from '../components/common/KakaoLoad';

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <KakaoLoadOne />
      <Outlet />
      <KakaoLoadTwo />
      <KakaoLoadThree />
    </>
  );
}
