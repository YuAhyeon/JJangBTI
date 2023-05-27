import styled from 'styled-components';
import { colFlexCenter } from './shared';

const MainContainer = styled.main`
  ${colFlexCenter};
  margin: auto;
  height: 100vh;
  max-width: 500px;
  background-color: var(--pink);
`;

export default MainContainer;
