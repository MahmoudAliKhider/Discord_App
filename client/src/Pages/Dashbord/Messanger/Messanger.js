import React from "react";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import WelcomeMessage from "./WelcomMessage";
import MessengerContent from "./MessageContent";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393f",
  marginTop: "48px",
  display: "flex",
});

const Messenger = () => {
  const chosenChatDetails = useSelector((state) => state.chat.chosenChatDetails);
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent  chosenChatDetails={chosenChatDetails}/>
      )}
    </MainContainer>
  );
};

export default Messenger;
