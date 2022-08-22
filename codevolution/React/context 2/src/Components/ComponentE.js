import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'
class ComponentE extends Component {
  static contextType = UserContext
  render() {
    return (
      <div>
        ComponentE Context {this.context}
     <ComponentF />
     </div>
    )
  }
}
// one more way , only works with class component 
// ComponentE.contextType = UserContext
export default ComponentE