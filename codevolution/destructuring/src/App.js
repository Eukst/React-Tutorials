import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
function App() {
  return (
    <div>
    <div>
   <Greet name='mj' hero='manoj'>MJ is here </Greet>
    </div>
    <hr/>
    <Welcome name='mk' hero='manoj kumar'></Welcome>
    </div>

    
  );
}

export default App;
 