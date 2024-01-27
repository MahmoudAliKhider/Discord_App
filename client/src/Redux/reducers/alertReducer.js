import alertActions from "../actions/alertAction";

const initState = {
    showAlertMessage: false,
    alertMessageContent: null
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case alertActions.OPEN_ALERT_ACTION:
            return {
                ...state,
                showAlertMessage: true,
                alertMessageContent: action.content
            }
        case alertActions.CLOSE_ALERT_ACTION:
            return {
                ...state,
                showAlertMessage: false,
                alertMessageContent: null
            }
        default:
            return state
    }
}

export default reducer;