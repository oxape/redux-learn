/**
 * Created by oxape on 2017/3/3.
 */
import { VisibilityFilters } from './constants/ActionTypes'
import { addTodo, toggleTodo, setVisibilityFilter } from './actions'

import store from './store'

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))


