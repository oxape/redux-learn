/**
 * Created by oxape on 2017/3/9.
 */
// import express from 'express'
const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

const server = app.listen(3000, function () {
    const host = server.address().address
    const port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
})