const verifyTokenSocket = require('./middlewares/authSocket');
const { disconnectHandler } = require('./socketHandelar/disconnectHandler');
const { newConnectionHandler } = require('./socketHandelar/newConnectionHandelar');
const serverStore = require('./serverStore');
const directMessageHandler = require('./socketHandelar/directMessageHandler');
const directChatHistoryHandler = require('./socketHandelar/directChatHistoryHandler');
const roomCreateHandler = require('./socketHandelar/roomCreateHandler');

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

    const emitOnlineUser = () => {
        const onlineUsers = serverStore.getOnlineUser();
        io.emit("online-users", { onlineUsers })
    }

    // connection
    io.on("connection", (socket) => {
        console.log("User connected");
        console.log(socket.id)

        newConnectionHandler(socket, io);
        emitOnlineUser();

        socket.on("direct-message", (data) => {
            directMessageHandler(socket, data);
        });

        socket.on("room-create", () => {
            roomCreateHandler(socket);
        })

        socket.on("direct-chat-history", (data) => {
            directChatHistoryHandler(socket, data);
        });

        socket.on("disconnect", () => {
            disconnectHandler(socket);
        })
    })

    setInterval(() => {
        emitOnlineUser()
    }, [1000 * 8])
}


module.exports = {
    registerSocketServer
}