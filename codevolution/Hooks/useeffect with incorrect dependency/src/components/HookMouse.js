import React,{useState,useEffect} from 'react'
//here we implemet  componenetwillunmount functionility
function HookMouse() {
   const [x,setX]= useState(0)
   const [y,setY]= useState(0)

  const logMousePosition = e =>{
      console.log('Mouse Event')
      setX(e.clientX)
      setY(e.clientY)
  } 
  useEffect(()=>{
      console.log('useEffect called')
      window.addEventListener('mousemove',logMousePosition)
      return () => {
        console.log('FC component unmounting')
        window.removeEventListener('mousemove',logMousePosition)
      }
  },[])
  return (
    <div>
        <h1>Hooks</h1>
        X: {x} Y: {y}
    </div>
  )
}

export default HookMouse