import { Logo } from '../styles/shared';
import logoSrc from '../assets/logo.png';
import MainContainer from '../styles/layout';
import HomeContent from '../components/Home/HomeContent';

function Home() {
  return (
    <MainContainer>
      <Logo src={logoSrc} alt="짱구 로고" />
      <HomeContent />
    </MainContainer>
  );
}

export default Home;
