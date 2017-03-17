/**
 * Created by oxape on 2017/3/5.
 */
import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter){
        case 'all':
            return todos
        case 'completed':
            return todos.filter(t => t.completed)
        case 'active':
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state.todos, ownProps.filter)
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {dispatch(toggleTodo(id))}
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDisptachToProps
)(TodoList)

export default VisibleTodoList