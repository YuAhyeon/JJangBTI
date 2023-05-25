import { Outlet } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

export function Root() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}
