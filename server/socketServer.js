const verifyTokenSocket = require('./middlewares/authSocket')
const { disconnectHandler } = require('./socketHandelar/disconnectHandler')
const { newConnectionHandler } = require('./socketHandelar/newConnectionHandelar')
const serverStore = require('./serverStore');

const registerSocketServer = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        }
    })

    serverStore.setSocketServerInstance(io);
    
    io.use((socket, next) => {
        verifyTokenSocket(socket, next)
    })

    io.on("connection", (socket) => {
        console.log("User connected");
        console.log(socket.id)

        newConnectionHandler(socket, io)

        socket.on("disconnect", () => {
            disconnectHandler(socket)
        })
    })
}

module.exports = {
    registerSocketServer
}