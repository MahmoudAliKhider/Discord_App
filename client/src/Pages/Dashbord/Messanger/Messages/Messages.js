import React from 'react';
import { useSelector } from "react-redux";
import { styled } from '@mui/system';
import MessagesHeader from './MessagesHeader';

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
    </MainContainer>
  )
}

export default Messages