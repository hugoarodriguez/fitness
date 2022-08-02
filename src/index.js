//const element = document.createElement('h1');
//element.innerText = "Hello React";
//const container = document.getElementById('root');
//container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const user = {
    firstName : 'Hugo',
    lastName : 'Rodríguez',
    avatar : 'https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1659484942~hmac=6f052108097fb3db38a2c67eeb828867',
};

function getName(user){
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user){
    if(user){
        return <h1>Hello {getName(user)}</h1>;
    }
    return <h1>Hello Stranger </h1>;
}

const element = (
    <div>
        {getGreeting(user)}
        <img src={user.avatar} width="256" height="256" alt="userImage"/>
    </div>);
const container = document.getElementById('root');

//ReactDOM.render(QUE,DONDE)
ReactDOM.render(element, container)