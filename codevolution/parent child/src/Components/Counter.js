import React, { Component } from 'react'

export class Counter extends Component {
  constructor()
  {
        super()
        this.state ={counter: 0}      
  }
  increase()
  {
      this.setState({counter:this.state.counter + 1},()=>{console.log('counter inside state',this.state.counter)})
      console.log(this.state.counter)
    }

    render() {
    return (<div>
      <div>Counter : {this.state.counter}</div>
      <button onClick={()=> this.increase()}>Increment</button>
      </div>
    )
  }
}

export default Counter