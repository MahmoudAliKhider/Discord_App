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
                        height: "auto",
                        bgcolor: '#fff',
                        borderRadius: "7px",
                        boxShadow: "8px 4px 10px 6px rgb(0 0 0 / 20% )",
                        display: "flex",
                        flexDirection: "column",
                        margin: "15px",
                        padding: "20px"
                    }
                }
            >
                {props.children}
            </Box>
        </BoxStyle>
    )
}

export default AuthBox