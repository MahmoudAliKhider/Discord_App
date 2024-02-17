import React from 'react'
import { styled } from "@mui/system";
import { useSelector } from "react-redux"
import Video from './Video';
const MainContainer = styled("div")({
    height: "85%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
});

const VideosContainer = () => {
    const localStream = useSelector((state) => state.room.localStream);
    const remoteStreams = useSelector((state) => state.room.remoteStreams);

    return (
        <MainContainer>
            <Video stream={localStream} isLocalStream />
            {
                remoteStreams.map(stream => <Video
                    stream={stream}
                    key={stream.id}
                />)
            }
        </MainContainer>
    )
}

export default VideosContainer