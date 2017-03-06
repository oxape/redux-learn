/**
 * Created by oxape on 2017/3/6.
 */
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer'

const logger = createLogger()

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store