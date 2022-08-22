import React ,{useState} from 'react'

// 1 create a component 
function HookCounter() {
    // array destructuring 
    // 2,3 create state variable and method
    const [count,setCount]= useState(0)
  return (
        <button onClick={() => setCount(count+1)} >Count {count} in Functional Component by Hook</button>
   
  )
}

export default HookCounter