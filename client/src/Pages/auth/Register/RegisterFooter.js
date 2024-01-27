import React from 'react'
import { useNavigate } from 'react-router-dom';

import CustomPrimaryButton from '../../../components/CustomPrimaryButton'
import RedirectInfo from '../../../components/RedirectInfo'
import { Tooltip } from '@mui/material';

const RegisterFooter = ({ handleRegister, isFormValid }) => {

    const navigate = useNavigate();

    const handelPushToRegisterPage = () => {
        navigate('/login')
    };

    const getFormNotValidMessage = () => {
        return "Enter Correct Email Address and Username shoud contains between 3 to 12 and Password  should contain between 5  and 16 characters"
    };

    const getFormValidMessage = () => {
        return "press to register...!"
    };

    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >

                <div>
                    <CustomPrimaryButton
                        label="Register"
                        additionalStyles={{ marginTop: "16px" }}
                        disabled={!isFormValid}
                        onClick={handleRegister}
                    />
                </div>
            </Tooltip>

            <RedirectInfo
                text=" "
                redirectText="Already have an account ?"
                additionalStyles={{ marginTop: "5px" }}
                redirectHandler={handelPushToRegisterPage}
            />
        </>
    )
}

export default RegisterFooter