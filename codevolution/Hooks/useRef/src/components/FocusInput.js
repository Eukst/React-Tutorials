import React,{useEffect,useRef} from 'react'

function FocusInput() {
    const InputRef = useRef(null)
  useEffect(()=>{
      // focus the input element
      console.log(InputRef)
      InputRef.current.focus()
  },[])
    return (
    <div>
        <input ref={InputRef} type="text"/>
    </div>
  )
}

export default FocusInput
//1. import useRef
//2. create ref variable by call useRef and passing initial value
