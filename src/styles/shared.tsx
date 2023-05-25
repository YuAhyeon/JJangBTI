import { css } from 'styled-components';

export const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const justifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const justifyEnd = css`
  display: flex;
  justify-content: end;
`;

export const alignCenter = css`
  display: flex;
  align-items: center;
`;

export const rowFlex = css`
  display: flex;
`;

export const colFlex = css`
  display: flex;
  flex-direction: column;
`;

export const colFlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const colFlexJustifyCenter = css`
  ${colFlex};
  justify-content: center;
`;

export const colFlexAlignCenter = css`
  ${colFlex};
  align-items: center;
`;
