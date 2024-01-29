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
    fontSize: "15px",
    fontWeight: 600,
    marginLeft: "5px",
    color: "white",
})

const Avatar = ({ username, large }) => {

    return (
        <AvatarPreview style={large ? { height: "80px", width: "80px" } : {}}>{username.substring(0, 2)}</AvatarPreview>
    )
}

export default Avatar