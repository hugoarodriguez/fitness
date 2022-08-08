import React from "react";
import ExercisesForm from "../components/ExerciseForm";
import Card from "../components/Card";
import "../components/styles/ExerciseNew.css";
import FatalError from "./500";

class ExercisesNew extends React.Component {

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

            await fetch('http://localhost:8000/api/exercises', config);

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

        //console.log(this.state);
    }

    render(){
        if(this.state.error){
            return <FatalError/>
        }

        return (
            <div className="ExerciseNew_Lateral_Spaces row">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm ExerciseNew_Card_Space">
                    <ExercisesForm
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        form={this.state.form}
                    />
                </div>
             </div>
        );
    }
}

export default ExercisesNew;