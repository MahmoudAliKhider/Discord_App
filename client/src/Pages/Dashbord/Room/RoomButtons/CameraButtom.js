import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

const CameraButtom = ({ localStream }) => {
  const [cameraenabled, setCameraEnabled] = useState(true);

  const handelTogglecamera = () => {
    localStream.getVideoTracks()[0].enabled = ! cameraenabled;
    setCameraEnabled(!cameraenabled)
  }

  return (
    <IconButton onClick={handelTogglecamera} style={{ color: "white" }}>
      {cameraenabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  )
}

export default CameraButtom