import React, { Component } from 'react'

export class EventBind extends Component {
  constructor(props)
  {
      super(props)
      this.state={
          message:'hello Manoj'
      }

      this.clickHandler = this.clickHandler.bind(this)
   }
  clickHandler()
  {
      this.setState({
          message:'bye Manoj'
        
      })
      console.log(this)
  }
  
  
    render() {
    return (
      <div>
          <div>{this.state.message}</div>
          <button onClick={this.clickHandler}> Click me in Event Handler</button>
      </div>
    )
  }
}

export default EventBind