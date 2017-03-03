/**
 * Created by oxape on 2017/3/3.
 */
import { createStore, applyMiddleware} from 'redux'
import todoApp from '../reducers'
import createLogger from 'redux-logger'

const logger = createLogger();
let store = createStore(todoApp, todoApp(), applyMiddleware(logger))

export default store
