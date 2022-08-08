import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "../components/styles/ExerciseNew.css";
import FatalError from "./500";
import ExercisesNew from "./ExercisesNew";

function ExercisesNewContainer() {

    let navigate = useNavigate();

    const [form, setForm] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleChange = e => {

        setForm({
            ...form,
                [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async e => {

        setLoading(true);

        e.preventDefault();

        try {

            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }

            await fetch('http://localhost:8000/api/exercises', config)
            setLoading(false);

            //Agregar push de navegación a página /exercises
            navigate('/exercise');

        } catch (error) {
            
            setLoading(true);
            setError(error);
            console.log(error);
        }
    }

    if(error){
        return <FatalError/>
    }

    if(error){
        return <FatalError/>
    }

    return <ExercisesNew
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            />;
}

export default ExercisesNewContainer;