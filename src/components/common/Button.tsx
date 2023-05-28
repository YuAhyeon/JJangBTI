import styled from 'styled-components';

function Button() {
  return <ButtonBox>gd</ButtonBox>;
}

const ButtonBox = styled.button`
  width: 100%;
  height: 60px;

  background-color: #f7d53e;
  background: linear-gradient(to bottom, #f7d53e 5%, #ffca38 100%);

  border-radius: 6px;
  border: 1px solid #f5b812;
  box-shadow: inset 0px 1px 0px 0px #fce2c1;

  padding: 6px 24px;
  text-shadow: 0px 1px 0px #f7cd5c;

  &:hover {
    background: linear-gradient(to bottom, #ffca38 5%, #f7d53e 100%);
    background-color: #ffca38;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export default Button;
