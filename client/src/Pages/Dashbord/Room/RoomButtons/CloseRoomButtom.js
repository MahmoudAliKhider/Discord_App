import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CloseRoomButtom = () => {

  const handleLeaveRoom = () => { }

  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  )
}

export default CloseRoomButtom