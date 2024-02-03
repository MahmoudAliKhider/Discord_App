import React, { useEffect } from 'react'
import { styled } from "@mui/system";
import NewMessageInput from './NewMessageInput';
import Messages from './Messages/Messages';
import { getDirectChatHistory } from '../../../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
    flexGrow: 1,
});

const MessageContent = ({chosenChatDetails}) => {

    // const chosenChatDetails = useSelector((state) => state.chat.chosenChatDetails);

    useEffect(() => {
        if (chosenChatDetails) {
            getDirectChatHistory({
                receiverUserId: chosenChatDetails.id
            });
        }
    }, [chosenChatDetails]);

    return (
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    )
}

export default MessageContent