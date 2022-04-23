'use strict'

require('dotenv').config()
const Express = require('express')
const bodyParser = require('body-parser')

const app = Express()

app.use(bodyParser.json())

const IndexRoute = require('./routes/index')

app.use('/',IndexRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Your app is running on port number ${process.env.PORT}`);
});

