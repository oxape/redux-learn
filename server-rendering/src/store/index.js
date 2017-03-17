/**
 * Created by oxape on 2017/3/3.
 */
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import todoApp from '../reducers'
import createLogger from 'redux-logger'

const logger = createLogger();

const configureStore = (preloadedState) => {
    const store = createStore(
        todoApp,
        preloadedState,
        applyMiddleware(thunk, logger)
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore
