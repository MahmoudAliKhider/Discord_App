import React from 'react'
import Alert from '@mui/material/Alert';
import Snakbare from '@mui/material/Snackbar';
import { connect } from 'react-redux';
import { getActions } from "../Redux/actions/alertAction";

const AlertNotification = () => {
    
    return (
        <Snakbare
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open
            onClose={() => { }}

        >
            <Alert severity='info'>Message Info </Alert>
        </Snakbare>
    )
}

const mapStoreStateToProps = ({ alert }) => {
    return {
        ...alert,
    }
}
const mapActionToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}
export default connect(mapStoreStateToProps, mapActionToProps)(AlertNotification)