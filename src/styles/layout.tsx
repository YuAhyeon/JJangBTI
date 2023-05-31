import styled from 'styled-components';
import { colFlexCenter } from './shared';

const MainContainer = styled.main`
  ${colFlexCenter};
  margin: auto;
  max-width: 500px;
`;

export const AdfitWrap = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
`;

export default MainContainer;
