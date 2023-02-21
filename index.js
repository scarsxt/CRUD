const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/siddharth'
const app = express()

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(express.json())

const sidRouter = require('./routes/siddharth')
app.use(sidRouter);

app.listen(9000, function(){
    console.log('Server started')
})

