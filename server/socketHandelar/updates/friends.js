const User = require('../../models/user');
const Friends = require('../../models/friendInvitation');
const serverStore = require('../../serverStore');

const updateFriendsPendingInvitation = async (userId) => {
    try {
        const pendingInvitations = await Friends.findOne({
            receiverId: userId
        }).populate("senderId", "_id username mail")

        const recevList = serverStore.getActionConnections(userId);

        const io = serverStore.getSocketServerInstance();

        recevList.forEach((resreveSocketId) => {
            io.to(resreveSocketId).emit("friends-invitations", {
                pendingInvitations: pendingInvitations ? pendingInvitations : [],
            });
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    updateFriendsPendingInvitation
}