/**
 * Created by oxape on 2017/3/15.
 */
import { createStore, applyMiddleware} from 'redux'
import todoApp from '../src/reducers'
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'redux'
import App from '../src/components/App'

// 通过服务端注入的全局变量得到初始 state
const preloadedState = window.__INITIAL_STATE__

// 使用初始 state 创建 Redux store
const store = createStore(todoApp, preloadedState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)