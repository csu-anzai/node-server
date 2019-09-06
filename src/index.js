const express = require('express')
const server = express()
server.get('/', (req, res) => res.send('Hello World!'))

if (process.env.NODE_ENV === "test") {
    server.get('/', (req, res) => res.send('Hello World!'))
}else if(process.env.NODE_ENV === "dev") {
    server.get('/', (req, res) => res.send('Hello World!'))
    server.listen({
        port: 4001
    }, () => console.log(`Example app listening on port ${port}!`))
}else if(process.env.NODE_ENV === "prod") {
    server.get('/', (req, res) => res.send('Hello World!'))
    server.listen({
        port: 4000
    })
}

module.exports = server;
