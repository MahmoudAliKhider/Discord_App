import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import { getActions } from "../Redux/actions/alertAction";

const AlertNotification = () => {
  const dispatch = useDispatch();
  const { showAlertMessage, alertMessageContent } = useSelector(state => state.alert);

  const { closeAlertMessage, openAlertMessage } = getActions(dispatch);

  const handleClose = () => {
      closeAlertMessage();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showAlertMessage}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
