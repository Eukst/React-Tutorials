import { render } from "@testing-library/react";
import React from "react";
function Greet(props){         // method 2 at place of props {name, hero}
  const {name,hero} = props    // method 1 
   return (<div>
     <h1> Hello {name} AKA {hero} </h1>
     {props.children}
     </div>)
}
export default Greet;