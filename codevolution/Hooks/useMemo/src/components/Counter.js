import React,{useState,useMemo} from 'react'

function Counter() {
const [counterone,setCounterOne]=useState(0)
const [countertwo,setCounterTwo]=useState(0)
const incrementone = () => {
setCounterOne(counterone+1)
}
const incrementtwo = () => {
    setCounterTwo(countertwo+1)
    }


const isEven=useMemo(()=>{
    let i=0
    while(i<2000000000) i++ 
    
    return counterone %2 == 0
},[counterone])
 
return (
    <div>
        <button onClick={incrementone}>Counter One : {counterone}</button>
        <span>{isEven?'Even':'Odd'}</span>
        <br/>
        <button onClick={incrementtwo}>Counter Two : {countertwo}</button>
       

    </div>
  )
}

export default Counter