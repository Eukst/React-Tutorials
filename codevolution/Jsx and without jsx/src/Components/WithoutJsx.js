import { render } from "@testing-library/react";
import React from "react";
function WithoutJsx()
{
   return React.createElement(
      'div',
      {id:'hello',className:'dummy'},
      React.createElement('h1',null,'Hello Mj without jsx'))
  
}
export default WithoutJsx;