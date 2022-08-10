//const element = document.createElement('h1');
//element.innerText = "Hello React";
//const container = document.getElementById('root');
//container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css'
//import "@popperjs/core";
//import "bootstrap";

//const container = document.getElementById('root');

//ReactDOM.render(QUE,DONDE)
//ReactDOM.render(<Exercises/> , container)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  );