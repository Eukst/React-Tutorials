import React, { Component } from 'react'
// 1 create a component 
class ClassCounter extends Component {
  constructor(props) {
    super(props)
 // 2 create a state variable and initilize to zero 
    this.state = {
       count: 0
    }
  }
  // 3 create a method to set value 
  incrementCount =()=>{
this.setState({
    count:this.state.count +1
})
  }
    render() {
        const {count} = this.state
    return (
      <div>
          <button onClick={this.incrementCount}> Click {count} times</button>
      </div>
    )
  }
}

export default ClassCounter