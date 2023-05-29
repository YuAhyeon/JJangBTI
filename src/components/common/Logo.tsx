import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logoSrc from '../../assets/logo.png';

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  return <Image src={logoSrc} alt="짱구 로고" onClick={handleClick} />;
}

const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 80px;
`;

export default Logo;
