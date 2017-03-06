/**
 * Created by oxape on 2017/3/3.
 */
import React from 'react'
import { render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App'


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)


