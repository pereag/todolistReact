import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddTodoForm from './addTodoForm';

const Todo = () => {

    const [todos, setTodos] = useState([
        {id: 1, todo: 'Acheter du lait'},
        {id: 2, todo: 'Acheter du pain'}
    ])
    const todosMap = () => todos.map((todo, index) => {
        return(
            <li className="list-group-item d-flex justify-content-between" key={todo.id}>{todo.todo} <span  onClick={() => removeTodo(todo.id)} className='btn btn-danger ml-auto'>Supprimer</span></li>
        )
    })

    const addNewTodo = (newTodo) => {
        if (newTodo.trim() != "")
            setTodos([...todos, {id: uuidv4(), todo: newTodo}])
        else 
            alert("Champs vide !")
    }

    const removeTodo = (todoId) => {
        console.log(todoId)
        const newTodos = todos.filter((todo) =>  todo.id != todoId)
        setTodos(newTodos);
        console.log(newTodos)
    }

    return(
        <div>
            <h1>{todos.length} To-do</h1>

            <ul className="list-group">
                {(todosMap())}
            </ul>
            <AddTodoForm addNewTodo={addNewTodo}></AddTodoForm>
        </div>
    ) 
}

export default Todo