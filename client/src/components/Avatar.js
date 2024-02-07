import styled from '@emotion/styled'
import React from 'react'

const AvatarPreview = styled("div")({
    height: "36px",
    width: "36px",
    backgroundColor: "#5865f2",
    borderRadius: "43px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: 700,
    color: "white",
})

const Avatar = ({ username , large }) => {

    return (
        <AvatarPreview style={large ? { height: "70px", width: "70px" } : {}}>
            {username.substring(0, 2)}
        </AvatarPreview>
    )
}

export default Avatar