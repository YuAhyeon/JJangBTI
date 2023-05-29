import { atom } from 'recoil';

export interface TotalScore {
  EI: number;
  SN: number;
  TF: number;
  JP: number;
  [key: string]: number;
}

const totalScoreAtom = atom<TotalScore>({
  key: 'score',
  default: {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  },
});

export default totalScoreAtom;
