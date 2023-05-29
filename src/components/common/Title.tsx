import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Title() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return <Text onClick={handleClick}>JJangBTI</Text>;
}

const Text = styled.h1`
  font-family: 'rose';
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 5px;
  text-shadow: 1px 1px 1px #292929;

  color: var(--pink);
  margin-bottom: 20px;
`;

export default Title;
