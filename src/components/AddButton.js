import React from "react";
import { Link } from "react-router-dom";

import './styles/AddButton.css';
import addButtonImg from '../images/add.png'

const AddButton = () => (
    <Link to="/exercise/new">
        <img src={addButtonImg} className="Fitness-Add" alt="addExercise"/>
    </Link>
);

export default AddButton;