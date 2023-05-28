import styled from 'styled-components';

type ProgressBarInfo = {
  value: number;
};

function ProgressBar({ value }: ProgressBarInfo) {
  return (
    <Container>
      <Bar value={value} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 18px;
  margin: 15px 0;
  overflow: hidden;
  border-radius: 25px;
  border: 1px solid var(--black);
`;

const Bar = styled.div<ProgressBarInfo>`
  width: ${({ value }) => `${value}%`};
  height: 100%;

  background-color: var(--yellow);
  border-right: 1px solid var(--black);
`;

export default ProgressBar;
