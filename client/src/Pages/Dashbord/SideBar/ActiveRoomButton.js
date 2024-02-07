import { Button, Toolbar, Tooltip } from '@mui/material';
import Avatar from "./../../../components/Avatar"
import React from 'react'
import * as roomHanler from '../../../realtimeCommunication/roomHandler';

const ActiveRoomButton = ({
    creatorUsername,
    roomId,
    amountOfParticipants,
    isUserInRoom,
}) => {

    const handleJoinActiveRoom = () => {
        if (amountOfParticipants < 4) {
            // join the room
            roomHanler.joinRoom(roomId)
        }
    }
    const activeRoomButtonDisabled = amountOfParticipants > 3;
    const roomTitle = `Creator ${creatorUsername} .connected ${amountOfParticipants}`
    return (
        <Tooltip title={roomTitle}>
            <div>
                <Button
                    disabled={activeRoomButtonDisabled || isUserInRoom}
                    onClick={handleJoinActiveRoom}
                    style={
                        {
                            width: "48px",
                            height: "48px",
                            borderRadius: "16px",
                            margin: "0",
                            padding: "0",
                            minWidth: "0",
                            marginTop: "10px",
                            color: "white",
                            backgroundColor: "#5865F2",
                        }
                    }
                >
                    <Avatar username={creatorUsername} />
                </Button>
            </div>
        </Tooltip>
    )
}

export default ActiveRoomButton