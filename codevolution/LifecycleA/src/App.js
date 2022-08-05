import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import LifecycleA from './Components/LifecycleA';
import React from 'react';
function App() {

  return (
    <div>
    <React.StrictMode>
     <LifecycleA />
   </React.StrictMode>
    </div>
  );
}

export default App;
 