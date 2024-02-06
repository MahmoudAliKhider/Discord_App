const connectedUser = new Map();

let io = null;

const setSocketServerInstance = (ioInstance) => {
    io = ioInstance
}

const getSocketServerInstance = () => {
    return io;
}

const addNewConnectedUesr = ({ socketId, userId }) => {
    connectedUser.set(socketId, { userId });
}
const removeConnectedUser = (socketId) => {
    if (connectedUser.has(socketId)) {
        connectedUser.delete(socketId);
    }
}
const getActionConnections = (userId) => {
    const activeConnections = [];

    connectedUser.forEach(function (value, key) {
        if (value.userId === userId) {
            activeConnections.push(key)
        }
    })
    return activeConnections;
}

const getOnlineUser = () => {
    const onlineUser = [];

    connectedUser.forEach((value, key) => {
        onlineUser.push({ socketId: key, userId: value.userId })
    })

    return onlineUser;
}

module.exports = {
    addNewConnectedUesr,
    removeConnectedUser,
    getActionConnections,
    setSocketServerInstance,
    getSocketServerInstance,
    getOnlineUser
}