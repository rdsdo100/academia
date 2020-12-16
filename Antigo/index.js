'use strict'
const mongoose = require('mongoose')
const express = require ('express')
const cors = require('cors')
const bodyParser = require ('body-parser')
const  rota = require("./config/rotas/IndexRote")

mongoose.connect('mongodb+srv://rdsdo:root@academia-jxuob.mongodb.net/Academia?retryWrites=true&w=majority' ,
    {useNewUrlParser : true ,
        useUnifiedTopology : true
    })

const app = express()
const port = 3003

app.use(cors())
//app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('port' , port)



app.use(rota)

app.listen(port, ()=>{
    console.log('Server Online !!!  port: ' + port )
})
