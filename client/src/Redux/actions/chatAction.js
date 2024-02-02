export const chatTypes = {
    DIRECT: "DIRECT",
    GROUP: "GROUP",
}

export const chatAction = {
    SET_CHOSEN_CHAT_DETAILS: "CHAT.SET_CHOSEN_CHAT_DETAILS",
    SET_MESSAGE: "CHAT.SET_MESSAGE",
    SET_CHAT_TYPE: "CHAT.SET_CHAT_TYPE",
}

export const getActions = (dispatch) => {
    return {
        setChosenChatDetails: (details, chatType) => {
            dispatch(setChosenChatDetails(details, chatType));
        }
    }
}

const setChosenChatDetails = (chatDetails, type) => {
    return {
        type: chatAction.SET_CHOSEN_CHAT_DETAILS,
        chatType: type,
        chatDetails,
    }
}

export const setMessage = (messages) => {
    return {
        type: chatAction.SET_MESSAGE,
        messages,
    }
}