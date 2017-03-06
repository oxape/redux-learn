/**
 * Created by oxape on 2017/3/4.
 */
import {VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO} from '../constants/ActionTypes'
import { combineReducers } from 'redux'


function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state=[], action) {
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text:action.text,
                    completed: false,
                }
            ]
        case TOGGLE_TODO:{
            return state.map((todo, index) => {
                if (index === action.id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        }
        default:
            return state
    }
}

const todoApp = combineReducers({visibilityFilter, todos})

export default todoApp