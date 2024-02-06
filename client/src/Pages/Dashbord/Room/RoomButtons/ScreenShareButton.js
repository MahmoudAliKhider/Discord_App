import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const ScreenShareButton = () => {
  const [isScreenSharingAction , setIsScreenSharingAction] = useState(false);

  const handleScreenShareToggle = () =>{
    setIsScreenSharingAction(!isScreenSharingAction)
  }

  return (
    <IconButton onClick={handleScreenShareToggle} style={{color:"white"}}>
      {isScreenSharingAction ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  )
}

export default ScreenShareButton