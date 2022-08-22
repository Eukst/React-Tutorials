import logo from './logo.svg';
import './App.css';
import HoverCounter from './Components/HoverCounter';
import ClickCounter from './Components/ClickCounter';
// A higher order component (HOC) accept a component as
//  parameter and returns enhanced component
function App() {
  return (
    <div className="App">
     <ClickCounter name="Manoj" />
     <HoverCounter />
    </div>
  );
}

export default App;
