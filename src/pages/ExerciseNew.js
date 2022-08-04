import React from "react";

class ExercisesNew extends React.Component {

    handleClick = () => {
        console.log('Clicked');
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                Send
            </button>
        );
    }
}

export default ExercisesNew;