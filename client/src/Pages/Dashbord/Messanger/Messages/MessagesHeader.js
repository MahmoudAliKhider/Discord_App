import React from 'react';
import { styled } from '@mui/system';
import { Typography } from "@mui/material";
import Avatar from "././../../../../components/Avatar";

const MainContainer = styled("div")({
    width: "98%",
    display: "column",
    marginTop: "10px",
})
const MessagesHeader = ({ name = '' }) => {
    // console.log(name +"header")
    return (
        <MainContainer>
            <Avatar large username={name}/>
            <Typography
                variant='h4'
                sx={{
                    fontWeight: "bold",
                    color: "white",
                    marginLeft: "5px",
                    marginRight: "5px",
                }}
            >
                {name}
            </Typography>
            <Typography
                sx={{
                    color: "#b9bbbe",
                    marginLeft: "5px",
                    marginRight: "5px",
                }}
            >
                This is the beginning of Your Conversation with {name}
            </Typography>
        </MainContainer>
    )
}

export default MessagesHeader