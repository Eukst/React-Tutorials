import React ,{useState, useEffect, useInsertionEffect}from 'react'

function HookCounterone() {
    const [count,setCount]= useState(0)
    const [name,setName] = useState('')
     useEffect(()=>{
         console.log('useEffect updating document title')
       document.title = `FC Clicked ${count} times`  
     },[count])
  
  return (
    <div>
        <input type='text' value={name} onChange = {e =>setName(e.target.value) }/>
        <button onClick={() => setCount(count +1)}>FC Clicked {count} Times</button>
    </div>
  )
}

export default HookCounterone
  //  useEffect run after every render of component 
    // use effect is written inside component so we can access it.without writing extra code 