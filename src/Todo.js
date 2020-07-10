import React, { useState } from "react";

const Todo = ({ todo, deleteTodo, updateTodo, id }) => {
    const [editingTodo, setEditingTodo] = useState(todo);
    const [isEditing, setIsEditing] = useState(false);

    function handleRemove() {
        deleteTodo(id);
    }

    function toggleEdit() {
        setIsEditing((e) => !e);
    }

    function handleChange(e) {
        setEditingTodo(e.target.value);
    }

    function stopEditing(e) {
        e.preventDefault();
        updateTodo(id, editingTodo);
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <div>
                <form onSubmit={stopEditing}>
                    <input
                        type="text"
                        value={editingTodo}
                        onChange={handleChange}
                    />
                    <button>Stop Editing</button>
                </form>
            </div>
        );
    }
    return (
        <div>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleRemove}>X</button>
            <li style={{ listStyleType: "none" }}>{todo}</li>
        </div>
    );
};

export default Todo;
