import logo from './logo.svg';
import './App.css';
// A higher order component (HOC) accept a component as
//  parameter and returns enhanced component
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter';
import User from './Components/User';
import Counter from './Components/Counter';
function App() {
  return (
    <div className="App">
      {/* <Counter render={(count,incrementCount)=><ClickCounter count={count} incrementCount={incrementCount}/>}/>
      
      <Counter render={(count,incrementCount)=><HoverCounter count={count} incrementCount={incrementCount}/>}/> */}
      
      <Counter>
      {(count,incrementCount)=><ClickCounter count={count} incrementCount={incrementCount}/>}
      </Counter>

      <Counter>
      {(count,incrementCount)=><HoverCounter count={count} incrementCount={incrementCount}/>}
      </Counter>





     
    {/* <ClickCounter />
    <HoverCounter />
    <User render={(isloggedin)=> isloggedin?"vishvas":"guest"}/>
    */}


 
    </div>
  );
}

export default App;
