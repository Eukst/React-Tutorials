import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          name:'manoj'
    
      }
      console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(props,state)
    {   
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }
    componentDidMount()
    {
        console.log('life cycle A componentDidMount')
    }
    render() {
        console.log('life cycele A render')
      return (
        <div>LifecycleA</div>
      )
    }
}

export default LifecycleA