import styled from 'styled-components';
import MainContainer from '../styles/layout';
import logoSrc from '../assets/logo.png';
import { Logo } from '../styles/shared';

function Home() {
  return (
    <MainContainer>
      <Logo src={logoSrc} />
    </MainContainer>
  );
}

export default Home;
