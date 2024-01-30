const connectedUser = new Map();

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

module.exports = {
    addNewConnectedUesr,
    removeConnectedUser,
}