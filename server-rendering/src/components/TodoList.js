/**
 * Created by oxape on 2017/3/4.
 */
import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({onTodoClick, todos}) => (
    <ul>
        {
            todos.map(todo => <Todo key={todo.id}
                                    onClick={() => onTodoClick(todo.id)}
                                    {...todo}
            />)
        }
    </ul>
)

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
}

export default TodoList