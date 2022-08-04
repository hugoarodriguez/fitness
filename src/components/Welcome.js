import React from "react";
import "./styles/Welcome.css"

/*Este es un Componente de tipo "Funcional", no se le puede modificar el estado, en otras palabras es estático,
  contrario a lo que sucede con los Componentes de Clase, como lo es el Card.js */

function Welcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}</h1>
                <p>Let's workout to get some gains!</p>
            </div>
        </div>
    );
}

export default Welcome;