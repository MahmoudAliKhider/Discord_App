import { Typography } from '@mui/material'
import React from 'react'

const FriendsTitle = ({ title }) => {
    return (
        <Typography
            sx={{
                textTransform: 'uppercase',
                color: '#8e9297',
                fontSize: '12px',
                marginTop: '15px',
            }}
        >
            {title}
        </Typography>
    )
}

export default FriendsTitle