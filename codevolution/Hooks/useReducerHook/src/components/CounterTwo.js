import React ,{useReducer}from 'react'
const initialState= {
    firstCounter:0,
    secondCounter:10
}
const reducer =(state,action)=>{
    console.log(action)
switch(action.type){
   case 'increment':
       return {... state,firstCounter: state.firstCounter+action.value}
    case 'decrement':
        return {... state,firstCounter: state.firstCounter-action.value}
    case 'increment2':
        return {... state,secondCounter: state.secondCounter+action.value}
    case 'decrement2':
        return {... state,secondCounter: state.secondCounter-action.value}
    case 'reset':
        return initialState
    default:
        return state   
}

}

function CounterTwo() {
    const [count,dispatch]= useReducer(reducer,initialState)
   console.log(count)
  return (
    <div><h1>Counter 1</h1>
        <div> Count : {count.firstCounter}</div>
        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Dcrement</button>
        <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Dcrement 5</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <hr/>
        <h1>Counter 2</h1>
        <div> Count : {count.secondCounter}</div>
        <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement2',value:1})}>Dcrement</button>

    </div>
  )
}

export default CounterTwo
//1. import useReducer from react
//2.  define initial state and reducer function 
//3.  call reducer function and show value in render 
// user reducer return values which can be assign to variable using array destructuring
// component state and action are now objects