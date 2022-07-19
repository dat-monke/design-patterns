import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

// By having flex == 1, you are saying for it to take equal amount of space
// With props => props.weight, it will allow the leftweight/rightweight to be overwritten
const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
