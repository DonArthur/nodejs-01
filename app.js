const express = require('express')
const path = require('path')
const routes = require('./routes/index')
const parser = require('body-parser')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(parser.urlencoded({ extended: true }))

app.use('/', routes)

module.exports = app