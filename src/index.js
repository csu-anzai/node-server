const express = require('express')
const server = express()

if (process.env.NODE_ENV === "test") {
    server.get('/', (req, res) => res.send('Hello world!'))
}else if(process.env.NODE_ENV === "dev") {
    server.get('/', (req, res) => res.send('Hello world!'))
    server.listen({
        port: 3000
    }, () => console.log(`Example server listening on port ${port}!`))
}else if(process.env.NODE_ENV === "prod") {
    server.get('/', (req, res) => res.send('Hello world!'))
    server.listen({
        port: 4000
    })
}

module.exports = server;
