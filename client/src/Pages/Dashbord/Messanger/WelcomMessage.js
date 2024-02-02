import React from 'react';
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const Wrapper = styled('div')({
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const WelcomMessage = () => {
    return (
        <Wrapper>
            <Typography variant='h5' sx={{ color: "white" }}>
                To start Chating Choose Conversation
            </Typography>
        </Wrapper>
    )
}

export default WelcomMessage