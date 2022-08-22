import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';

import './appStyle.css'
import style from './appStyle.module.css'
function App() {
  return (
    <div>
 <Stylesheet primary={true}/>
 <Inline />
 <h1 className='error'> appStyle.css</h1>
 <h1 className={style.success}> appStyle.module.css</h1>
 

    </div>
  );
}

export default App;
 