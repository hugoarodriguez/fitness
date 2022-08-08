import React, { useState, useEffect } from "react";

import Exercises from "./Exercises";
import Loading from "../components/Loading";
import FatalError from "./500";

const ExercisesContainer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                
                let res = await fetch('http://localhost:8000/api/exercises');
                let data = await res.json();

                //Actualizamos los valores de "data" y de "loading"
                setData(data);
                setLoading(false);
    
            } catch (error) {
                
                setLoading(false);
                setError(error);
    
            }
        }

        fetchExercises();
    }, []);

    if(loading){
        return <Loading/>
    }
    if(error){
        return <FatalError/>
    }

    return(
        <React.Fragment>
            <Exercises
                data={data}
            />
        </React.Fragment>
    );
}

export default ExercisesContainer;