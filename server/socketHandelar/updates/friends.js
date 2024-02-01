const User = require('../../models/user');
const Friends = require('../../models/friendInvitation');
const serverStore = require('../../serverStore');

const updateFriendsPendingInvitation = async (userId) => {
    try {
        const pendingInvitations = await Friends.find({
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

const updateFriends = async (userId) => {
    try {

        //get active connection
        const receiveList = serverStore.getActionConnections(userId);

        if (receiveList.length > 0) {
            const user = await User.findById(userId, { _id: 1, friends: 1 }).populate(
                "friends",
                "_id username mail"
            );

            if (user) {
                const friendsList = user.friends.map((f) => {
                    return {
                        id: f._id,
                        mail: f.mail,
                        username: f.username
                    }
                })

                const io = serverStore.getSocketServerInstance();

                // get io server
                receiveList.forEach((resreveSocketId) => {
                    io.to(resreveSocketId).emit("friends-list", {
                        friends: friendsList ? friendsList : [],
                    });
                })
            }



        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    updateFriendsPendingInvitation,
    updateFriends,
}