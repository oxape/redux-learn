/**
 * Created by oxape on 2017/3/15.
 */
import { createStore, applyMiddleware} from 'redux'
import todoApp from '../common/reducers'
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import App from '../common/components/App'
import { Router, Route, browserHistory } from 'react-router';

// 通过服务端注入的全局变量得到初始 state
const preloadedState = window.__INITIAL_STATE__

// 使用初始 state 创建 Redux store
const store = createStore(todoApp, preloadedState)

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
)