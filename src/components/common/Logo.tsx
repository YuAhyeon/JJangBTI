import styled from 'styled-components';
import logoSrc from '../../assets/logo.png';

function Logo() {
  return <Image src={logoSrc} alt="짱구 로고" />;
}

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 80px;
`;

export default Logo;
