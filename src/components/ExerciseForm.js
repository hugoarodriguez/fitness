import React from "react";

class ExercisesNew extends React.Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = e => {
        
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3 mt-3">
                        <input 
                            className="form-control"
                            placeholder="Title"
                            type="text"
                            name="title"
                            onChange={this.handleChange}
                            value={this.state.title || ''}
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            className="form-control"
                            placeholder="Description"
                            type="text"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.description || ''}
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            className="form-control"
                            placeholder="Image"
                            type="text"
                            name="img"
                            onChange={this.handleChange}
                            value={this.state.img || ''}
                        />
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input 
                                className="form-control"
                                placeholder="Left Color"
                                type="text"
                                name="leftColor"
                                onChange={this.handleChange}
                                value={this.state.leftColor || ''}
                            />
                        </div>
                        <div className="col">
                            <input 
                                className="form-control"
                                placeholder="Right Color"
                                type="text"
                                name="rightColor"
                                onChange={this.handleChange}
                                value={this.state.rightColor || ''}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ExercisesNew;