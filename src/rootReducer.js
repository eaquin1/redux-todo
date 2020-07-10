const INITIAL_STATE = {todos: []}

const rootReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "ADD_TODO"){
        return {
            ...state,
            todos: [
                ...state.todos, { ...action.newTodo}
            ]
        }
    }

    if (action.type === "UPDATE_TODO"){
        const todos = state.todos.map(todo => {
            if (todo.id === action.id){
                return { ...todo, todo: action.updatedTodo}
            }
            return todo
        })
        return {
            ...state,
            todos
        }
    }

    if (action.type === "REMOVE_TODO"){
        return {
            ...state, 
            todos: state.todos.filter(todo => todo.id !== action.id)
        }
    }

     return state;
}

export default rootReducer