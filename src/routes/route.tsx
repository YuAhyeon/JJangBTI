import { Outlet } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

export default function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}
