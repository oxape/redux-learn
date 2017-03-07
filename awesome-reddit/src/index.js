/**
 * Created by oxape on 2017/3/6.
 */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './containers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Root/>
    </MuiThemeProvider>,
    document.getElementById('root'))

