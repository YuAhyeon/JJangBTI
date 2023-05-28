import { css } from 'styled-components';
import { flex } from '../../styles/shared';

const buttonCSS = css`
  ${flex};
  width: 100%;
  height: 60px;

  background-color: #fdc938;
  background: linear-gradient(to bottom, #fdc938 5%, #ffcd42 100%);

  border-radius: 6px;
  border: 1px solid #ffae00;
  box-shadow: inset 0px 1px 0px 0px #fce2c1;

  padding: 6px 24px;
  text-shadow: 1px 1px 0px #444444;

  &:hover {
    background: linear-gradient(to bottom, #ffcd42 5%, #fdc938 100%);
    background-color: #fdc938;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export default buttonCSS;
