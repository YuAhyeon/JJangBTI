import ENFJ from '../assets/result-images/ENFJ.png';
import ENFP from '../assets/result-images/ENFP.png';
import ENTJ from '../assets/result-images/ENTJ.png';
import ENTP from '../assets/result-images/ENTP.png';
import ESFJ from '../assets/result-images/ESFJ.png';
import ESFP from '../assets/result-images/ESFP.png';
import ESTJ from '../assets/result-images/ESTJ.png';
import ESTP from '../assets/result-images/ESTP.png';
import INFJ from '../assets/result-images/INFJ.png';
import INFP from '../assets/result-images/INFP.png';
import INTJ from '../assets/result-images/INTJ.png';
import INTP from '../assets/result-images/INTP.png';
import ISFJ from '../assets/result-images/ISFJ.png';
import ISFP from '../assets/result-images/ISFP.png';
import ISTJ from '../assets/result-images/ISTJ.png';
import ISTP from '../assets/result-images/ISTP.png';

function getMBTIImage(result: string) {
  switch (result) {
    case 'ENFJ':
      return ENFJ;
    case 'ENFP':
      return ENFP;
    case 'ENTJ':
      return ENTJ;
    case 'ENTP':
      return ENTP;
    case 'ESFJ':
      return ESFJ;
    case 'ESFP':
      return ESFP;
    case 'ESTJ':
      return ESTJ;
    case 'ESTP':
      return ESTP;
    case 'INFJ':
      return INFJ;
    case 'INFP':
      return INFP;
    case 'INTJ':
      return INTJ;
    case 'INTP':
      return INTP;
    case 'ISFJ':
      return ISFJ;
    case 'ISFP':
      return ISFP;
    case 'ISTJ':
      return ISTJ;
    case 'ISTP':
      return ISTP;
    default:
      return INFP;
  }
}

export default getMBTIImage;
