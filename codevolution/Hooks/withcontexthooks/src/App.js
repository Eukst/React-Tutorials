
import './App.css';
import ComponentC from './components/ComponentC';
import React from 'react';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Manoj'}>
        <ChannelContext.Provider value={"Code Evolution"}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
//1 . create a context
//2 . provide context to value and provider should wrap childern
//3.  consume context value
//4 export from top parent  and import in childrens