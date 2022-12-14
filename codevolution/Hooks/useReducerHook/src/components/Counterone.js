import React ,{useReducer}from 'react'
const initialState=0
const reducer =(state,action)=>{
switch(action){
   case 'increment':
       return state+1
    case 'decrement':
        return state-1
    case 'reset':
        return initialState
    default:
        return state   
}
}

function Counterone() {
    const [count,dispatch]= useReducer(reducer,initialState)
  return (
    <div>
        <div> Count : {count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Dcrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Counterone
//1. import useReducer from react
//2.  define initial state and reducer function 
//3.  call reducer function and show value in render 
// user reducer return values which can be assign to variable using array destructuring