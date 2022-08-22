// important
import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [count,setCount] = useState(0)
  const tick =()=>{
      setCount(count+1)
  }
  //componentdidmount
  useEffect(()=>{
     const interval = setInterval(tick,1000) 
     // component will unmount
     return ()=>{
       clearInterval(interval)  
     }
  },[count])
  // take care of empty dependencies list

    return (
    <div>{count}</div>
  )
}

export default IntervalHookCounter

// we have one more method to run it without using count dependency
// const tick =()=>{
//     setCount(prevCount =>prevCount+1)
// }
// useEffect(()=>{
//     const interval = setInterval(tick,1000) 
//     // component will unmount
//     return ()=>{
//       clearInterval(interval)  
//     }
//  },[])
//-----------------------------------
// useEffect(()=>{
//     function doSomething(){
//         console.log(someprops)
//     }
//     doSomething()
//     const interval = setInterval(tick,1000) 
//     // component will unmount
//     return ()=>{
//       clearInterval(interval)  
//     }
//  },[someprops])