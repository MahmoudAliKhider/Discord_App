const { v4: uuidv4 } = require('uuid');

const connectedUser = new Map();
let activeRooms = [];

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

// rooms

const addNewActiveRoom = (userId, socketId) => {
    const newActiveRoom = {
        roomCreator: {
            userId,
            socketId
        },
        participants: [
            {
                userId,
                socketId
            }
        ],
        roomId: uuidv4(),
    }

    activeRooms = [...activeRooms, newActiveRoom];

    return newActiveRoom;
};

const getActiveRooms = () => {
    return [...activeRooms];
}

const getActiveRoom = (roomId) => {
    const activeRoom = activeRooms.find(
        (activeRoom) => activeRoom.roomId === roomId);

    return {
        ...activeRoom,
    };
}

const joinActiveRoom = (roomId, newParticipant) => {
    const room = activeRooms.find((room) => room.roomId === roomId);
    activeRooms = activeRooms.filter((room) => room.roomId !== roomId);

    const updateRoom = {
        ...room,
        participants: [...room.participants, newParticipant],
    }
    activeRooms.push(updateRoom);
}

const leaveActiveRoom = (roomId, participantSocketId) => {
    const activeRoom = activeRooms.find((room) => room.roomId === roomId);

    if (activeRoom) {
        const copyActiveRoom = { ...activeRoom };

        copyActiveRoom.participants = copyActiveRoom.participants.filter(
            (participant) => participant.socketId !== participantSocketId
        );
        activeRooms = activeRooms.filter((room) => room.roomId !== roomId)

        if (copyActiveRoom.participants.length > 0) {
            activeRooms.push(copyActiveRoom);
        }
    }
}

module.exports = {
    addNewConnectedUesr,
    removeConnectedUser,
    getActionConnections,
    setSocketServerInstance,
    getSocketServerInstance,
    getOnlineUser,
    addNewActiveRoom,
    getActiveRooms,
    getActiveRoom,
    joinActiveRoom,
    leaveActiveRoom,
}