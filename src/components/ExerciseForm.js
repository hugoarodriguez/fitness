import React from "react";

class ExercisesForm extends React.Component {

    render(){
        
        const { onChange, onSubmit, form } = this.props;

        return (
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="mb-3 mt-3">
                        <input 
                            className="form-control"
                            placeholder="Title"
                            type="text"
                            name="title"
                            onChange={onChange}
                            value={form.title || ''}
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            className="form-control"
                            placeholder="Description"
                            type="text"
                            name="description"
                            onChange={onChange}
                            value={form.description || ''}
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            className="form-control"
                            placeholder="Image"
                            type="text"
                            name="img"
                            onChange={onChange}
                            value={form.img || ''}
                        />
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input 
                                className="form-control"
                                placeholder="Left Color"
                                type="text"
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor || ''}
                            />
                        </div>
                        <div className="col">
                            <input 
                                className="form-control"
                                placeholder="Right Color"
                                type="text"
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor || ''}
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

export default ExercisesForm;