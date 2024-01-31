const User = require("../models/user");
const Friends = require("../models/friendInvitation");
const friendsUpdate = require("../socketHandelar/updates/friends");

exports.postInvite = async (req, res) => {

    const { targetMailAddress } = req.body;
    const { userId, mail } = req.user;

    if (mail.toLowerCase() === targetMailAddress) {
        return res.status(409).send("You can not send invitation to your Self")
    }
    const targitUser = await User.findOne({
        mail: targetMailAddress.toLowerCase(),
    })
    if (!targitUser) {
        return res.status(404).send(`friends of ${targetMailAddress} is Not found`);
    }

    // check invitation send
    const invitationAlreadySend = await Friends.findOne({
        senderId: userId,
        receiverId: targitUser._id,
    });

    if (invitationAlreadySend) {
        return res.status(409).send("Invitation already sent");
    }

    // check if user send invitation already friends
    const userAlreadyFriend = targitUser.friends.find(
        (friendId) => friendId.toString() === userId.toString()
    );

    if (userAlreadyFriend) {
        return res.status(409).send("Frends already Added , please check friend  List");
    }

    const newInvitation = await Friends.create({
        senderId: userId,
        receiverId: targitUser._id,
    })

    friendsUpdate.updateFriendsPendingInvitation(targitUser._id.toString())
    return res.status(201).send("Invitation has been send")
}