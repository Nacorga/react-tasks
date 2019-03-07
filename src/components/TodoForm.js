import React, { Component } from 'react';

class TodoForm extends Component {

    constructor() {

        super();

        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority: "low"
        };

        // Para enlazar las funciones con el componente
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInput(e) {

        const { value, name } = e.target;

        this.setState({ // Para cambiar los datos del state
            [name]: value
        });

    }

    handleSubmit(e) {

        e.preventDefault(); // Para evitar que se refresque la pantalla
        this.props.onAddToDo(this.state); // Llamamos al evento del componente principal
    }

    render() {
        return (

            <div className="card">
                <form className="card-body" onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange = {this.handleInput}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="Responsible" onChange = {this.handleInput}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Description" onChange = {this.handleInput}></input>
                    </div>
                    <select className="form-control" onChange = {this.handleInput}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>Hight</option>
                    </select>
                    <button type="submit" className="btn btn-primary btn-lg btn-block mt-4">Save</button>
                </form>
            </div>

        )
    }
}

export default TodoForm;