import React from 'react';
import { connect } from 'react-redux';
import { ADD_TODO, UPDATE_INPUT } from '../Store/actionTypes';

const Todos = (props) => {
    const handleTodoChange = (e) => {
        props.updateInput(e.target.value)
    }

    const sendTodo = () => {
        props.addTodo(props.todoInput)
    }
    const { todos } = props
    return (
        
        <div className='main-container'>
            <h1>Todos App</h1>
                <input onChange={(event) => handleTodoChange(event)} type='text' placeholder='todo' value={props.todoInput} />
                <button onClick={sendTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => {return(<li id={todo}>{todo.todo}</li>)})}
            </ul>

            Show:
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            console.log('addTodo called');
            dispatch({
                type: ADD_TODO,
                payload: {
                    todo: todo,
                    completed: false
                }
            })
        },
        updateInput: (input) => {
            console.log('updateInput called');
            dispatch({
                type: UPDATE_INPUT,
                payload: input
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Todos);