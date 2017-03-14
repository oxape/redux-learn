/**
 * Created by oxape on 2017/3/3.
 */
import React from 'react'
import { render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App'
import { Router, Route, browserHistory } from 'react-router';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
)


