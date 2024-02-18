import React from 'react'
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { leaveRoom } from '../../../../realtimeCommunication/roomHandler';

const CloseRoomButtom = () => {

  const handleLeaveRoom = () => {
    leaveRoom()
   }

  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  )
}

export default CloseRoomButtom