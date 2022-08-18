import logo from './logo.svg';
import './App.css';
import ComponentC from './Components/ComponentC'
import {UserProvider} from './Components/UserContext'
function App() {
  return (
    <div className="App">
     <UserProvider value = "Vishvas">
       <ComponentC />
     </UserProvider>
    </div>
  );
}

export default App;
