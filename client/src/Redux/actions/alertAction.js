const alertActions = {
    OPEN_ALERT_ACTION: "ALERT.OPEN_ALERT_ACTION",
    CLOSE_ALERT_ACTION: "ALERT.CLOSE_ALERT_ACTION",
}

export const getActions = (dispatch) => {
    return {
        openAlertMessacge: (dispatch) => dispatch(openAlertMessage(dispatch)),
        closeAlertMessage: (dispatch) => dispatch(closeAlertMessage())
    }
}

const openAlertMessage = (content) => {
    return {
        type: alertActions.OPEN_ALERT_ACTION,
        content,
    }
}

const closeAlertMessage = () => {
    return {
        type: alertActions.CLOSE_ALERT_ACTION,
    }
}

export default alertActions;