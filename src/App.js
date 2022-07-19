import { SplitScreen } from './SplitScreen'

// Adding background color to your text
const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'green'}}>Left!</h1>
}

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: 'red'}}>Right!</h1>
}

function App() {
  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent} 
      leftWeight={1}
      rightWeight={3}/>    
  );
}

export default App;
