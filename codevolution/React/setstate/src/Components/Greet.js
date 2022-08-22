import { render } from "@testing-library/react";
import React from "react";
function Greet(props){
   return (<div>
     <h1> Hello {props.name} AKA {props.hero} </h1>
     {props.children}
     </div>)
}
export default Greet;