import React,{Component} from "react";

class Welcome extends Component {
    render(){
        return( 
        <div>
          
        <h1> Class Component </h1>
        <h1> Hello {this.props.name} AKA {this.props.hero}</h1>
        </div> )}
}
export default Welcome