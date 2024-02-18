import React, { useState } from 'react'
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import { useDispatch, useSelector } from 'react-redux';
import { getActions } from '../../../../Redux/actions/roomAction';
import { switchOutgoingTracks } from '../../../../realtimeCommunication/webRTChandler';


const constraints = {
  audio: false,
  video: true,
}

const ScreenShareButton = () => {
  const dispatch = useDispatch();

  const { setScreenSharingStream } = getActions(dispatch);
  const localStream = useSelector((state) => state.room.localStream)
  const screenSharingStream = useSelector((state) => state.room.screenSharingStream);
  const isScreenSharingActive = useSelector((state) => state.room.isScreenSharingActive);

  const handleScreenShareToggle = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (error) {
        console.log("screan Sharing error")
      }

      if (stream) {
        setScreenSharingStream(stream)
        switchOutgoingTracks(stream)
      }
    } else {
      switchOutgoingTracks(localStream)
      screenSharingStream.getTracks().forEach((t) => t.stop());
      setScreenSharingStream(null)
    }
  }

  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: "white" }}>
      {isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  )
}

export default ScreenShareButton