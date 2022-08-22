import React,{Component} from "react";

class Message extends Component {
    constructor()
    {
        super()
        this.state = {
          message:'Welcome visitor',
          buttontext:'subscribe'}
    }

    changeMessage()
    {
        this.setState({message:'thank you'})
        this.setState({buttontext:'Unsubscribe'})
    }

    render()
    {
        return( 
        <div>
          <h1> {this.state.message} </h1>
          <button onClick={()=> this.changeMessage()}> {this.state.buttontext}</button>
        </div> )
    }
}
export default Message