import React,{useContext} from 'react'
import { CountContext } from '../App'
function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div>
      <h1>ComponentA : {countContext.countState}</h1>
      <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Dcrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA