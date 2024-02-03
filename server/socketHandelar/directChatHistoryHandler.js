const chatUpdate = require('./updates/chat');
const Conversation = require("../models/conversation");

const directChatHistoryHandler = async (socket, data) => {
    try {
        const { userId } = socket.user;
        const { receiverUserId } = data;

        const conversation = await Conversation.findOne({
            participants: { $all: [userId, receiverUserId] },
            type: "DIRECT",
        });

        if (conversation) {
            chatUpdate.updateChatHistory(conversation._id.toString(), socket.id);
        }
        
    } catch (error) {
        console.log(error);
    }
};


module.exports = directChatHistoryHandler;