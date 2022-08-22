import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
function App() {
  return (
    <div>
    < Greet name='bruce' hero='Hulk'>
     It turns to green when Angry</Greet>
    < Greet name='tony' hero='Iron Man'>
    have high tech suits </Greet>
    < Greet name='strange' hero='Dr Starange'/>
{/* 
    <hr />
    <Welcome name='thor' hero='Thor'></Welcome>
    <Welcome name='Paul' hero='Antman'></Welcome>
    */}

    </div>

    
  );
}

export default App;
 