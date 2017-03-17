/**
 * Created by oxape on 2017/3/15.
 */
import configureStore from '../src/store'
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import App from '../src/components/App'

// 通过服务端注入的全局变量得到初始 state
const preloadedState = window.__INITIAL_STATE__

// 使用初始 state 创建 Redux store
const store = configureStore(preloadedState)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)