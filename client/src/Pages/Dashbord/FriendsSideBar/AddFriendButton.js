import React, { useState } from 'react'
import CustomPrimaryButton from "../../../components/CustomPrimaryButton";
import AddFriendDialog from './AddFriendDialog';

const AdditionStyle = {
    marginTop: "10px",
    marginLeft: "5px",
    width: "80%",
    height: "40px",
    background: "#3ba55d"
}
const AddFriendButton = () => {
    const [isDialogOpen, setisDialogOpen] = useState(false);

    const handleOpenAddFrindDialog = () => {
        setisDialogOpen(true);
    }

    const handleCloseAddFrindDialog = () => {
        setisDialogOpen(false);
    }
    return (
        <>
            <CustomPrimaryButton
                additionalStyles={AdditionStyle}
                label="Add Friend"
                onClick={handleOpenAddFrindDialog}
            />
            <AddFriendDialog
                isDialogOpen={isDialogOpen}
                closeDialogHandelar={handleCloseAddFrindDialog}

            />
        </>
    )
}

export default AddFriendButton