import styled from 'styled-components';

function Button() {
  return <ButtonBox>gd</ButtonBox>;
}

const ButtonBox = styled.button`
  background-color: var(--yellow);
  width: 100%;
  height: 60px;
  border-radius: 5px;
  border: 0;
  box-shadow: 0px 4px 0px #eebc31;
`;

export default Button;
