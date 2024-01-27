import React from 'react'
import Alert from '@mui/material/Alert';
import Snakbare from '@mui/material/Snackbar';
import { connect } from 'react-redux';

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

export default AlertNotification