import React, { Component } from 'react'
import withCounter from './withCounter'

 class HoverCounter extends Component {
    
    render() {
      const{count, incrementCount}=this.props
    return (
      <div>
          <h2 onMouseOver={incrementCount}>My Name is Manoj hover: {count}</h2>
      </div>
    )
  }
}

export default UpdatedCwithCounteromponent(HoverCounter)