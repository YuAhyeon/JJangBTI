import styled, { css } from 'styled-components';

export const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const colFlexJustifyCenter = css`
  ${colFlex};
  justify-content: center;
`;

export const colFlexAlignCenter = css`
  ${colFlex};
  align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const Container = styled.article`
  ${colFlexCenter}

  width: 350px;
  min-height: 500px;
  overflow: hidden;

  margin: 10px 0;
  padding: 20px 35px;
  border-radius: 20px;

  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
