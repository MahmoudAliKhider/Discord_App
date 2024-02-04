import store from "../Redux/store";
import { setMessage } from "../Redux/actions/chatAction";

export const updateDirectChatHistoryActive = (data) => {

    const { participants, messages } = data;
    // find id of user from token and id from active conversation

    const receiverId = store.getState().chat.chosenChatDetails?.id;
    const userId = store.getState().auth.userDetails._id;

    if (receiverId && userId) {
        const usersInConversation = [receiverId, userId];

        updateChatHistoryIfSameConversationActive({
            participants,
            usersInConversation,
            messages
        })
    }
}

const updateChatHistoryIfSameConversationActive = ({
    participants,
    usersInConversation,
    messages
}) => {
    const reasult = participants.every(function (participantId) {
        return usersInConversation.includes(participantId)
    });

    if (reasult) {
        store.dispatch(setMessage(messages))
        
    }
}