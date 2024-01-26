import React from 'react'
import { Typography } from "@mui/material";

const LoginHeader = () => {
    return (
        <>
            <Typography variant='h5' sx={{ color: "#092635" }}>
                Welcome Back !
            </Typography>
            <Typography sx={{ color: "#b9bbbe" }}>
                we are happy that you are with us!
            </Typography>
        </>
    )
}

export default LoginHeader