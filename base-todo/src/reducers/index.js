/**
 * Created by oxape on 2017/3/3.
 */
import {VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO} from '../constants/ActionTypes'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

export default function todoApp(state = initialState, action) {
    if (typeof action === 'undefined'){
        return state
    }
    switch (action.type) {
        case SET_VISIBILITY_FILTER: {
            return {...state, visibilityFilter:action.filter}
        }
        case ADD_TODO: {
            return {
                ...state,
                todos:[
                        ...state.todos,
                        {
                            text: action.text,
                            completed: false
                        }
                    ]
            }
        }
        case TOGGLE_TODO:{
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                        if (index === action.id){
                            return {...todo, completed:!todo.completed}
                        }
                        return todo
                    })
            }
        }
        default:
            return state
    }
}

