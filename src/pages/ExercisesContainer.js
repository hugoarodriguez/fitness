import React from "react";

import Exercises from "./Exercises";
import Loading from "../components/Loading";
import FatalError from "./500";
import useFetch from "../hooks/useFetch";

const ExercisesContainer = () => {

    const {data, loading, error} = useFetch('http://localhost:8000/api/exercises');

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