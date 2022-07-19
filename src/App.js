import { SplitScreen } from "./SplitScreen";

// Adding background color to your text
const LeftHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "green" }}>{message}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent message="David" />
      <RightHandComponent message="Taing" />
    </SplitScreen>
  );
}

export default App;
