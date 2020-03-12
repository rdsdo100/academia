'use strict'
const express = require ('express')
const bodyParser = require ('body-parser')
const  rota = require("./config/rotas/indexRote")
const http = require('http')

const app = express()
const port = 3003


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('port' , port)

const server = http.createServer(app)

app.use(rota)

server.listen(port, ()=>{
    console.log("Foi !!!  porta :" + port )
})
