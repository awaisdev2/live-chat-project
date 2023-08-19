const express = require("express")
const app = express()
const http = require("http")

const server = http.createServer(app)

server.listen(9000, ()=>{
    console.log("SERVER IS RUNNING SUCCESSFULLY!")
})