import React, {useState} from "react"
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({addTodo}) => {
   
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({todo, id: uuid()})
        setTodo("")
    }

    const handleChange = (e) => {
        setTodo(e.target.value)
        }

    


    return (
        <form onSubmit={handleSubmit}>
            <label >New Todo</label>
            <input 
                type="text"
                name="todo"
                id="todo"
                onChange={handleChange}
                value={todo}
                />
        <button>Submit</button>
        </form>
    )
}

export default NewTodoForm