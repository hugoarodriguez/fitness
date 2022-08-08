import React from "react";

import "../components/styles/ExerciseNew.css";
import FatalError from "./500";
import ExercisesNew from "./ExercisesNew";

class ExercisesNewContainer extends React.Component {

    state = {
        form: {
            title : '', 
            description : '', 
            img : '', 
            leftColor: '', 
            rightColor: ''
        },
        loading: false,
        error: null
    }

    handleChange = e => {
        
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = async e => {

        this.setState({
            loading: true
        });

        e.preventDefault();

        try {

            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            await fetch('http://localhost:8000/api/exercises', config)

            this.setState({
                loading: false
            });

            //Agregar push de navegación a página /exercises

        } catch (error) {
            
            this.setState({
                loading: true,
                error
            });
        }
    }

    render(){
        if(this.state.error){
            return <FatalError/>
        }

        return <ExercisesNew
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                />;
    }
}

export default ExercisesNewContainer;