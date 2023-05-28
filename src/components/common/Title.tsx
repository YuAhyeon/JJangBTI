import styled from 'styled-components';

function Title() {
  return <Text>JJangBTI</Text>;
}

const Text = styled.p`
  font-size: 35px;
  font-weight: bold;
  letter-spacing: 5px;
  text-shadow: 1px 1px 1px #292929;

  color: var(--pink);
  margin-bottom: 20px;
`;

export default Title;
