import React from 'react';
import { useSelector } from "react-redux";
import { styled } from '@mui/system';
import MessagesHeader from './MessagesHeader';
import DUMMY_MESSAGES from './DUMMY_MESSAGES';
import { Message } from './Message';

const MainContainer = styled("div")({
    height: "calc(100% -60px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

const Messages = () => {
    const chosenChatDetails = useSelector((state) => state.chat.chosenChatDetails);
    const Messages = useSelector((state) => state.chat.messages);
    // console.log(chosenChatDetails?.name + "messager")
    return (
        <MainContainer>
            <MessagesHeader name={chosenChatDetails?.name} />
            {
                DUMMY_MESSAGES.map((messages, index) => {
                    return <Message
                        key={messages._id}
                        content={messages.content}
                        username={messages.author.username}
                        sameAuthor={messages.sameAuthor}
                        date={messages.date}
                        sameDay={messages.sameDay}
                    />
                })
            }
        </MainContainer>
    )
}

export default Messages