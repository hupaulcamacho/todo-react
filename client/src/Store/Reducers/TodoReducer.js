import { ADD_TODO, UPDATE_INPUT} from '../actionTypes'

const initialState = {
    todos: [],
    todoInput: ''
}


const TodoReducer = (state = initialState, action) => {
    console.log('todo reducer is now running...',  action)

    const stateCopy = { ...state }

    switch(action.type) {
        case ADD_TODO:
            stateCopy.todos.push(action.payload)
            stateCopy.todoInput = ''
            break;

        case UPDATE_INPUT:
            stateCopy.todoInput = action.payload 
            break;

        default:
            return stateCopy
    }
    return stateCopy
}

export default TodoReducer;