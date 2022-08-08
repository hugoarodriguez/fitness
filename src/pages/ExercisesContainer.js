import React from "react";

import Exercises from "./Exercises";
import Loading from "../components/Loading";
import FatalError from "./500";

class ExercisesContainer extends React.Component{

    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.fetchExercises();
    }

    fetchExercises = async () => {
        try {
            
            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();

            this.setState({
                data,
                loading: false
            });

        } catch (error) {
            
            this.setState({
                loading: false,
                error
            });            

        }
    }

    render(){

        if(this.state.loading){
            return <Loading/>
        }
        if(this.state.error){
            return <FatalError/>
        }

        return(
            <React.Fragment>
                <Exercises
                    data={this.state.data}
                />
            </React.Fragment>
        );
    }
}

export default ExercisesContainer;