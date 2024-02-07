const serverStore = require('../serverStore');
const roomsUpdate = require('./updates/rooms');

const roomCreateHandler = (socket) => {
    console.log("handle room create");

    const userId = socket.user.userId;
    const socketId = socket.id;

    const roomDetails = serverStore.addNewActiveRoom(userId, socketId);

    socket.emit("room-create", {
        roomDetails,
    })

    roomsUpdate.updateRooms();
}

module.exports = roomCreateHandler;