import React from 'react'
import { styled } from '@mui/system';
import { useSelector } from "react-redux"
import WelcomMessage from './WelcomMessage';
import MessageContent from './MessageContent';
const MainContainer = styled('dev')({
  flexGrow: 1,
  backgroundColor: "#36393f",
  marginTop: "48px",
  display: "flex",
})
const Messanger = () => {
  const chosenChatDetails = useSelector((state) => state.chat.chosenChatDetails);

  return (
    <MainContainer>
      {
        !chosenChatDetails ? (
          <WelcomMessage />
        ) : (
          <MessageContent chosenChatDetails={chosenChatDetails} />
        )
      }
    </MainContainer>
  )
}

export default Messanger