const serverStore = require('../../serverStore');

const updateRooms = (toSpecifiedTarget = null) => {
    const io = serverStore.getSocketServerInstance();
    const activeRooms = serverStore.getActiveRooms();

    if (toSpecifiedTarget) {
        io.to(toSpecifiedTarget).emit('active-rooms', {
            activeRooms,
        })
    }else{
        io.emit('active-rooms', {
            activeRooms,
        });
    }
}

module.exports ={
    updateRooms
}