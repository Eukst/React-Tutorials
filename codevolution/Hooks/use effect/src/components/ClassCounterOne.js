import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }
    componentDidMount(){
        document.title = `CC Clicked ${this.state.count} times`
        console.log('tittle in component did mount ',document.title)
    }
    componentDidUpdate(pervProps,prevState){
      if(prevState.count != this.state.count)
      {
      console.log('updating document tittle')
        document.title = `CC Clicked ${this.state.count} times`
        console.log('tittle in component did update ',document.title)}
    }
    render() {
    return (
      <div>
        <input tyoe="text" value={this.state.name} onChange = {e =>{
          this.setState({name: e.target.value})
        }}/>
          
          <button onClick={() => this.setState({
              count: this.state.count + 1
          })}> Click {this.state.count} times</button>
      </div>
    )
  }
}

export default ClassCounterOne