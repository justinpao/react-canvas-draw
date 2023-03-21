import React from 'react';
import ReactDOM from 'react-dom';
import CanvasDraw from "./ExampleComponent";

const RetoolConnectedComponent = Retool.connectReactComponent(CanvasDraw);
document.body.setAttribute('style', 'margin: 0;') 
ReactDOM.render(
  <RetoolConnectedComponent/>, 
  document.body.appendChild(document.createElement('div')) 
);

