const connectedUser = new Map();

let io = null;

const setSocketServerInstance = (ioInstance)=>{
   io = ioInstance
}

const getSocketServerInstance = ()=>{
    return io;
}

const addNewConnectedUesr = ({ socketId, userId }) => {
    connectedUser.set(socketId, { userId });
    console.log("Add new connection");
    console.log(connectedUser)
}
const removeConnectedUser = (socketId) => {
    if (connectedUser.has(socketId)) {
        connectedUser.delete(socketId);
        console.log("Remove connection and new connect user");
        console.log(connectedUser)
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

module.exports = {
    addNewConnectedUesr,
    removeConnectedUser,
    getActionConnections,
    setSocketServerInstance,
    getSocketServerInstance,
}