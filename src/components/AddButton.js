import React from "react";
import './styles/AddButton.css';
import addButtonImg from '../images/add.png'

const AddButton = () => {
    return(
        <a href="/exercise/new">
            <img src={addButtonImg} className="Fitness-Add" alt="addExercise"/>
        </a>
    );
}

export default AddButton;