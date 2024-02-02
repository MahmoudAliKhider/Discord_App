import React from 'react'
import { styled } from '@mui/system';
import Avatar from '../../../../components/Avatar';
import { Typography } from '@mui/material';

const MainContainer = styled('div')({
    width: "97%",
    display: "flex",
    marginTop: "10px",
});

const AvatarConatiner = styled('div')({
    width: "70px"
});

const MessageContainer = styled('div')({
    display: "flex",
    flexDirection: "column"
});

const MessageContent = styled('div')({
    color: "#DCDDDE",
});

const SameAuthorMessageContent = styled("div")({
    color: "#DCDDDE",
    width: "97%"
});

const SameAuthorMessageText = styled('div')({
    marginLeft: "70px"
});

export const Message = ({ content, sameAuthor, username, date, sameDay }) => {
    if (sameAuthor && sameDay) {
        return (
            <SameAuthorMessageContent>
                <SameAuthorMessageText>{content}</SameAuthorMessageText>
            </SameAuthorMessageContent>
        )
    }

    return (
        <MainContainer>
            <AvatarConatiner>
                <Avatar username={username} />
            </AvatarConatiner>
            <MessageContainer>

                <Typography style={{ fontSize: "16px", color: "white" }}>
                    {username}{" "}
                    <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
                </Typography>

                <MessageContent>{content}</MessageContent>

            </MessageContainer>
        </MainContainer>
    )
}
