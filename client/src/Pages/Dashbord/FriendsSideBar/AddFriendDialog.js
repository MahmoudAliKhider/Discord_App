import React, { useEffect, useState } from 'react'
import { validateMail } from '../../../utils/validator';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import InputWithInput from '../../../components/inputWithInput';
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandelar,
    sendFreiendInvitation = () => { }
}) => {
    const [mail, setMail] = useState('');
    const [isFormValid, setFormValid] = useState('');

    const handelSendInvitation = () => { }

    const handelCloseDialog = () => {
        closeDialogHandelar();
        setMail(" ");
    }

    useEffect(() => {
        setFormValid(validateMail(mail))
    }, [mail, setFormValid])
    return (
        <div>
            <Dialog
                open={isDialogOpen}
                onClose={handelCloseDialog}
            >
                <DialogTitle><Typography>Add Friends</Typography></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>Enter Email Address of friend Which you would Like to invite</Typography>
                    </DialogContentText>
                    <InputWithInput
                        label="Mail"
                        type="text"
                        value={mail}
                        setValue={setMail}
                        placeholder="Enter Email Address"
                    />
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handelSendInvitation}
                        disabled={!isFormValid}
                        label="send"
                        additionalStyles={
                            {
                                marginleft: "15px",
                                marginRight: "15px",
                                marginBottom: "10px",
                            }
                        }
                    />
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default AddFriendDialog