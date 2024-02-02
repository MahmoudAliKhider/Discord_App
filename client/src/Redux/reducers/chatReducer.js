import { chatAction } from "../actions/chatAction"

const initState = {
    chosenChatDetails: null,
    chatType: null,
    messages: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case chatAction.SET_CHOSEN_CHAT_DETAILS:
            return {
                ...state,
                chosenChatDetails: action.chatDetails,
                chatType: action.chatType,
                messages: []
            }
        case chatAction.SET_MESSAGE:
            return {
                ...state,
                messages: action.messages,
            }
        default: return state;
    }
}

export default reducer;