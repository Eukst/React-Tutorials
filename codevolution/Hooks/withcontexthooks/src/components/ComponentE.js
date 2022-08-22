import React,{useContext} from 'react'
import ComponentF from './ComponentF'
 import {UserContext,ChannelContext} from '../App'
function ComponentE() {
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      <h1> Using Context with useContext hook </h1><br/>
      {user} - {channel}
      <hr/>
      <h1> Use context without hooks</h1>
        <ComponentF/>
    </div>
  )
}

export default ComponentE