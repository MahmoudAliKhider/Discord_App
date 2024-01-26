import React from 'react'
import Button from '@mui/material/Button';

const CustomPrimaryButton = (
    {
        label,
        additionalStyles,
        disabled,
        onClick
    }
) => {
    return (
        <Button
            variant="contained"
            sx={{
                bgcolor: "#092635",
                color: "white",
                textTransform: "none",
                fontSize: "15px",
                fontWeight: 500,
                width: "100%",
                height: "40px",

            }}
            style={additionalStyles ? additionalStyles : {}}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </Button>
    )
}

export default CustomPrimaryButton