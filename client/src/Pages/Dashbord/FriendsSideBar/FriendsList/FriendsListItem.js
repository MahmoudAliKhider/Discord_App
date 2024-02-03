import React from 'react'
import Button from "@mui/material/Button";
import { Typography } from '@mui/material'
import Avatar from '../../../../components/Avatar';
import OnlineIndecator from './OnlineIndecator';
import { chatTypes, getActions } from '../../../../Redux/actions/chatAction';
import { useDispatch } from 'react-redux';

const FriendsListItem = ({ id, username, isOnline }) => {

    const dispatch = useDispatch();
    const action = getActions(dispatch);

    const handelChooseActiveConversation = () => {
        action.setChosenChatDetails({ id: id, name: username }, chatTypes.DIRECT);
    }


    return (
        <Button
            onClick={handelChooseActiveConversation}
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
            {isOnline && <OnlineIndecator />}
        </Button>
    )
}

export default FriendsListItem