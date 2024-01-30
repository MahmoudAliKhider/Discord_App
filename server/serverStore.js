const connectedUser = new Map();

const addNewConnectedUesr = ({ socketId, userId }) => {
    connectedUser.set(socketId, { userId });
}

module.exports = {
    addNewConnectedUesr,
}