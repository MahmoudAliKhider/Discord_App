import React, { useEffect } from 'react'
import { styled } from "@mui/system";
import NewMessageInput from './NewMessageInput';
import Messages from './Messages/Messages';

const Wrapper = styled('div')({
    flexGrow: 1,
});

const MessageContent = ({ chosenChatDetails }) => {

    useEffect(()=>{

    },[chosenChatDetails]);

    return (
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    )
}

export default MessageContent