
import React from 'react';
import './App.css';
import ClassTimer from './components/ClassTimer';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';


function App() {
  return (
    <div className="App">
   <ClassTimer/>
   <hr/>
   <HookTimer/>
    </div>
  );
}

export default App;
