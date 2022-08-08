import React from "react";
//import { useNavigate } from "react-router-dom";

import ExercisesForm from "../components/ExerciseForm";
import Card from "../components/Card";

function ExercisesNew({form, onChange, onSubmit}) {
    
    return (
        <div className="ExerciseNew_Lateral_Spaces row">
            <div className="col-sm ExerciseNew_Card_Space">
                <Card {...form}/>
            </div>
            <div className="col-sm ExerciseNew_Card_Space">
                <ExercisesForm
                    onChange={onChange}
                    onSubmit={onSubmit}
                    form={form}
                />
            </div>
        </div>
    );
  }

export default ExercisesNew;