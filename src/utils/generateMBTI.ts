import { TotalScore } from '../recoil/atoms';

function generateMBTI(score: TotalScore) {
  let mbti = '';

  Object.keys(score).forEach((key) => {
    if (score[key] >= 2) {
      mbti += key[0];
    } else {
      mbti += key[1];
    }
  });

  return mbti;
}

export default generateMBTI;
