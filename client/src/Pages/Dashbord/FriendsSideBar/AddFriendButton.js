import React from 'react'
import CustomPrimaryButton from "../../../components/CustomPrimaryButton";

const AdditionStyle = {
    marginTop: "10px",
    marginLeft: "5px",
    width: "80%",
    height: "40px",
    background: "#3ba55d"
}
const AddFriendButton = () => {
    const handleOpenAddFrindDialog = () => { }
    return (
        <>
            <CustomPrimaryButton
                additionalStyles={AdditionStyle}
                label="Add Friend"
                anClick={handleOpenAddFrindDialog}
            />
        </>
    )
}

export default AddFriendButton