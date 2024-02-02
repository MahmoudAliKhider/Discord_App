import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { styled } from '@mui/system';

const MainContainer = styled("div")({
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const Input = styled("input")({
    backgroundColor: "#2f3136",
    height: "98%",
    color: "white",
    border: "none",
    borderRadius: "9px",
    fontSize: "14px",
    padding: "0 10px",
});

const NewMessageInput = () => {

    const chosenChatDetails = useSelector((state) => state.chat.chosenChatDetails);
    const [message, setMessage] = useState("");

    const handleMessageValueChange = (event) => {
        setMessage(event.target.value);
    };

    const handelKeyPressed = (event) => {
        if (event.key === "Enter") {
            handelSendMessage();
        }
    };

    const handelSendMessage = () => {
        console.log("Sending message to the Server...");
        setMessage("")
    }

    return (
        <MainContainer>
            <Input
                placeholder={`Write Message to ${chosenChatDetails?.name}`}
                value={message}
                onChange={handleMessageValueChange}
                onKeyDown={handelKeyPressed}
            />
        </MainContainer>
    )
}

export default NewMessageInput