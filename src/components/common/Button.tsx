import { css } from 'styled-components';
import { flex } from '../../styles/shared';

const buttonCSS = css`
  ${flex};
  width: 100%;
  height: 60px;

  background-color: #f7d53e;
  background: linear-gradient(to bottom, #f7d53e 5%, #ffca38 100%);

  border-radius: 6px;
  border: 1px solid #f5b812;
  box-shadow: inset 0px 1px 0px 0px #fce2c1;

  padding: 6px 24px;
  text-shadow: 1px 1px 1px #797979;

  &:hover {
    background: linear-gradient(to bottom, #ffca38 5%, #f7d53e 100%);
    background-color: #ffca38;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export default buttonCSS;
