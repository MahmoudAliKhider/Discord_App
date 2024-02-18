import React from 'react'
import { styled } from "@mui/system";
import { useSelector } from 'react-redux';
import ScreenShareButton from './ScreenShareButton';
import MicButton from './MicButton';
import CloseRoomButtom from './CloseRoomButtom';
import CameraButtom from './CameraButtom';

const MainContainer = styled("div")({
    height: "15%",
    width: "100%",
    backgroundColor: "#5865f2",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const RoomButton = () => {
    const localStream = useSelector((state) => state.room.localStream)
    return (
        <MainContainer>
            <ScreenShareButton />
            <MicButton />
            <CloseRoomButtom />
            <CameraButtom localStream={localStream}/>
        </MainContainer>
    )
}

export default RoomButton