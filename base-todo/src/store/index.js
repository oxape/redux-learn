/**
 * Created by oxape on 2017/3/3.
 */
import { createStore } from 'redux'
import todoApp from '../reducers'

let store = createStore(todoApp)

export default store
