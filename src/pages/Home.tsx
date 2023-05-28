import Logo from '../components/common/Logo';
import MainContainer from '../styles/layout';
import HomeContent from '../components/Home/HomeContent';

function Home() {
  return (
    <MainContainer>
      <Logo />
      <HomeContent />
    </MainContainer>
  );
}

export default Home;
