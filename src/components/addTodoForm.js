import React, {useState} from 'react';

const AddTodoForm = (props) => {

    const [addTodo, setAddTodo] = useState("")

    return(
        <>
            <form className='mt-5'>
                <label for="disabledTextInputtitle" className="form-label fw-bold">Ajouter un todo</label>
                <input type="text" id="disabledTextInput" className="form-control" value={addTodo} onChange={(e) => {setAddTodo(e.target.value)}} placeholder=""></input>
                <button className="btn btn-primary mt-3" onClick={(e) => e.preventDefault() + props.addNewTodo(addTodo) + setAddTodo("")}>Ajouter</button>
            </form>
        </>
    )
}

export default AddTodoForm