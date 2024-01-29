import React from 'react'
import Button from "@mui/material/Button";
import { Typography } from '@mui/material'
import Avatar from '../../../../components/Avatar';

const FriendsListItem = ({ id, username, isOnline }) => {
    return (
        <Button
            style={{
                width: '100%',
                height: "42px",
                marginTop: '10px',
                display: "flex",
                alignItems: 'center',
                justifyContent: 'flex-start',
                textTransform: 'uppercase',
                color: "black",
                position: 'relative',
            }}
        >
            <Avatar username={username} />

            <Typography
                style={{
                    marginLeft: "7px",
                    fontWeight: 600,
                    color: "#8e9297",

                }}
                variant='subtitle1'
                align='left'
            >{username}</Typography>
        </Button>
    )
}

export default FriendsListItem