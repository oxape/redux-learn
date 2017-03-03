/**
 * Created by oxape on 2017/3/3.
 */
import * as types from '../constants/ActionTypes'

export const addTodo = text => ({type: types.ADD_TODO, text})
export const toggleTodo = id = ({type: types.TOGGLE_TODO, id})
export const setVisibilityFilter = filter => ({type: types.SET_VISIBILITY_FILTER, filter})