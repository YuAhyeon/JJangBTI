import { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';
import Logo from '../components/common/Logo';
import MainContainer from '../styles/layout';
import HomeContent from '../components/Home/HomeContent';
import totalScoreAtom from '../recoil/atoms';

function Home() {
  const resetTotalScore = useResetRecoilState(totalScoreAtom);

  useEffect(() => {
    resetTotalScore();
  }, []);

  return (
    <MainContainer>
      <Logo />
      <HomeContent />
    </MainContainer>
  );
}

export default Home;
