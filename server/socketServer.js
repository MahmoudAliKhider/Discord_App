const verifyTokenSocket = require('./middlewares/authSocket')
const { newConnectionHandler } = require('./socketHandelar/newConnectionHandelar')

const registerSocketServer = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        }
    })

    io.use((socket, next) => {
        verifyTokenSocket(socket, next)
    })

    io.on("connection", (socket) => {
        console.log("User connected");
        console.log(socket.id)

        newConnectionHandler(socket, io)
    })
}

module.exports = {
    registerSocketServer
}