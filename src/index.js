//const element = document.createElement('h1');
//element.innerText = "Hello React";
//const container = document.getElementById('root');
//container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import Exercises from "./pages/Exercises";
import 'bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root');

//ReactDOM.render(QUE,DONDE)
ReactDOM.render(<Exercises/> , container)