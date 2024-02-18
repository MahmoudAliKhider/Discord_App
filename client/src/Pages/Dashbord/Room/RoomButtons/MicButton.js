import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

const MicButton = ({ localStream }) => {
  const [micEnabled, setMacEnabled] = useState(true);

  const handelToggleMic = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;

    setMacEnabled(!micEnabled)
  }

  return (
    <IconButton onClick={handelToggleMic} style={{ color: "white" }}>
      {micEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  )
}

export default MicButton