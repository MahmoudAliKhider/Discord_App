const Conversation = require("../../models/conversation");
const serverStore = require("../../serverStore");

const updateChatHistory = async (conversationId, toSpecifiedSocketId = null) => {
    const conversation = await Conversation.findById(conversationId).populate({
        path: "messages",
        model: "Model",
        populate: {
            path: "author",
            model: "Model",
            select: "username _id",
        }
    });
    if (conversation) {
        const io = serverStore.getSocketServerInstance();

        if (toSpecifiedSocketId) {
            // initial update of chat history
            return io.to(toSpecifiedSocketId).emit("direct-chat-history", {
                messages: conversation.messages,
                participants: conversation.participants,
            })
        }

        conversation.participants.forEach((userId) => {
            const activeConnection = serverStore.getActionConnections(
                userId.toString(),
            );

            activeConnection.forEach((socketId) => {
                io.to(socketId).emit("direct-chat-history", {
                    messages: conversation.messages,
                    participants: conversation.participants,
                })
            })
        });

    }
}

module.exports = {
    updateChatHistory,
}