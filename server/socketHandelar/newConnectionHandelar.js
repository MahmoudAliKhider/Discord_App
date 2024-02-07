const serverStore = require('../serverStore');
const updatePending = require('./updates/friends');
const roomsUpdate = require('./updates/rooms');

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;
    serverStore.addNewConnectedUesr({
        socketId: socket.id,
        userId: userDetails.userId,
    })

    updatePending.updateFriendsPendingInvitation(userDetails.userId);

    updatePending.updateFriends(userDetails.userId)

    setTimeout(()=>{
        roomsUpdate.updateRooms(socket.id)
    },[500])
}

module.exports = {
    newConnectionHandler,
}