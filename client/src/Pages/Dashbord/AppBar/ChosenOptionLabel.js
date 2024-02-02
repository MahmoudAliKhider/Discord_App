import React from 'react'
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const ChosenOptionLabel = () => {
    const userChat = useSelector((state) => state.chat.chosenChatDetails);
    return (
        <Typography
            sx={{ fontSize: "16px", color: "white", fontWeight: "bold" }}
        >
            {`${userChat?.name ? `Chosen Conversation : ${userChat?.name} ` : ""}`}
        </Typography>
    )
}

export default ChosenOptionLabel