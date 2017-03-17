/**
 * Created by oxape on 2017/3/14.
 */
import path from 'path'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from '../src/reducers'
import App from '../src/components/App'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

const app = Express()
const port = 3000

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))

function handleRender(req, res) {
    const store = createStore(todoApp)
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const preloaderState = store.getState();

    res.send(renderFullPage(html, preloaderState))
}

function renderFullPage(html, preloadedState) {
    return `<!doctype html>
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

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
})