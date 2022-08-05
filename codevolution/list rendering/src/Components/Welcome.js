import React,{Component} from "react";

class Welcome extends Component {
    render(){
        const {name,hero} = this.props    // props destructuring
        //const {state1.state2} = this.state     state destructuring
        return( 
        <div>
          
        <h1> Class Component </h1>
        <h1> Hello {name} AKA {hero}</h1>
        </div> )}
}
export default Welcome