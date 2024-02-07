const serverStore = require('../serverStore');
const updateRoom = require("./updates/rooms");

const roomLeaveHandler = (socket, data) => {
    const { roomId } = data;

    const activeRoom = serverStore.getActiveRoom(roomId);

    if (activeRoom) {
        serverStore.leaveActiveRoom(roomId, socket.id);
        updateRoom.updateRooms();
    }
}

module.exports = roomLeaveHandler;