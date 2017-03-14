/**
 * Created by oxape on 2017/3/4.
 */
import * as types from '../constants/ActionTypes'
let nextTodoId = 0
export const addTodo = text => ({type: types.ADD_TODO, id: nextTodoId++, text})
export const toggleTodo = id => ({type: types.TOGGLE_TODO, id})
export const setVisibilityFilter = filter => ({type: types.SET_VISIBILITY_FILTER, filter})