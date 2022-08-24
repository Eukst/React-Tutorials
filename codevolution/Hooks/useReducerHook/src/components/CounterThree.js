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

function CounterThree() {
    const [count,dispatch]= useReducer(reducer,initialState)
    const [counttwo,dispatch2]= useReducer(reducer,initialState)
  return (
    <div>
        <div> Count : {count}</div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Dcrement</button>
        <button onClick={()=>dispatch('reset')}>Reset</button>

        <div> Count2 : {counttwo}</div>
        <button onClick={()=>dispatch2('increment')}>Increment</button>
        <button onClick={()=>dispatch2('decrement')}>Dcrement</button>
        <button onClick={()=>dispatch2('reset')}>Reset</button>
    </div>
  )
}

export default CounterThree
//1. import useReducer from react
//2.  define initial state and reducer function 
//3.  call reducer function and show value in render 
// user reducer return values which can be assign to variable using array destructuring
//we have two count reducer using same code 