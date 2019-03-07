import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json'
import TodoForm from './components/TodoForm';

class App extends Component {

    constructor() {

        super(); // OBLIGATORIO AL USAR EL CONSTRUCTOR (para heredar las funcionalidades de React)

        this.state = { // Estado de los datos en una app de React
            todos: todos
        };

        this.handleAddToDo = this.handleAddToDo.bind(this);

    }

    handleAddToDo(todo) {

        this.setState({
            todos: [...this.state.todos, todo]
        });

    }

    removeToDo (idx) {

        if ( window.confirm('Are you sure you want to delete it?') ) {
            this.setState({
                todos: this.state.todos.filter((e, i) => {
                    return i !== idx;
                })
            });
        }

    }

    render() {

        const todos = this.state.todos.map((todo, i) => { // Para recorrer el objeto y obtener su índice
            return (
                <div className="col-md-4 mt-4">
                    <div className="card text-center">
                        <div className="card-header">
                            <h3>{todo.title}</h3>
                            <span className="badge badge-pill badge-danger">{todo.priority}</span>
                        </div>
                        <div className="card-body">
                            <p>{todo.description}</p>
                            <p><mark>{todo.responsible}</mark></p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger btn-lg btn-block mt-4" onClick = {this.removeToDo.bind(this, i)}>Remove</button>
                        </div>
                    </div>
                </div>
            )
        }) 

        return (
            <div className="App">

                <nav className="navbar navbar-dark bg-dark">
                    <span href="" className="text-white">
                        Tasks<span className="badge badge-pill badge-light ml-2">{this.state.todos.length}</span>
                    </span>
                    <img src={logo} className="App-logo" alt="logo" />
                </nav>
                
                <div className="container mt-4 mb-4">
                    <div className="row">
                        <div className="col-md-4 mt-4">
                            <TodoForm onAddToDo = {this.handleAddToDo}/>
                        </div>
                        { todos }
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;
