/**
 * Created by oxape on 2017/3/3.
 */
import { VisibilityFilters } from './constants/ActionTypes'
import { addTodo, toggleTodo, setVisibilityFilter } from './actions'

import store from './store'

let unsubscribe = store.subscribe( () => console.log(store.getState()))

console.log(store.getState())

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// 停止监听 state 更新
unsubscribe();


