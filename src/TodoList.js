import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"



const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos)
    

    const addTodo = (newTodo) => {
        dispatch({
            type: "ADD_TODO",
            newTodo
        })
      }

    const deleteTodo = (id) => {    
        dispatch({
            type: "REMOVE_TODO",
            id
        })
    }

    const updateTodo = (id, updatedTodo) => {
        dispatch({
            type: "UPDATE_TODO",
            id,
            updatedTodo
        })
    }

    const todoList = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            />
    ))
    return (
        <>
        <NewTodoForm addTodo={addTodo} />
        <ul>
            {todoList}
        </ul>
        </>
    ) 
}

export default TodoList