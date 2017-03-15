/**
 * Created by oxape on 2017/3/14.
 */
import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './reducers'
import App from './containers/App'

const app = Express()
const port = 3000

app.use(Express.static(path.join(__dirname, 'public')));

function handleRender(req, res) {
    const store = createStore(counterApp)
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const preloaderState = store.getState();

    res.send(renderFullPage(html, preloaderState))
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}
app.use(handleRender)

app.listen(port)