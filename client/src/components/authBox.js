import React from 'react'
import Box from "@mui/material/Box";
import { styled } from "@mui/system"

const BoxStyle = styled('dev')({
    width: '100%',
    height: "100vh",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#092635',
})
const AuthBox = (props) => {
    return (
        <BoxStyle>
            <Box
                sx={
                    {
                        width: 540,
                        height: 340,
                        bgcolor: '#FBF9F1',
                        borderRadius: "7px",
                        boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20% )",
                        display: "flex",
                        flexDirection: "column",
                        padding: "25px"
                    }
                }
            >
                {props.children}
            </Box>
        </BoxStyle>
    )
}

export default AuthBox