import React from 'react'
import { useNavigate } from 'react-router-dom';

import CustomPrimaryButton from '../../../components/CustomPrimaryButton'
import RedirectInfo from '../../../components/RedirectInfo'
import { Tooltip } from '@mui/material';

const LoginPageFooter = ({ handleLogin, isFormValid }) => {

    const navigate = useNavigate();

    const handelPushToRegisterPage = () => {
        navigate('/register')
    };

    const getFormNotValidMessage = () => {
        return "Enter Correct Email Address and Password should contain between 6  and 12 characters"
    };

    const getFormValidMessage = () => {
        return "press to login...!"
    };

    return (
        <>
            <Tooltip
                title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
            >

                <div>
                    <CustomPrimaryButton
                        label="Login"
                        additionalStyles={{ marginTop: "30px" }}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                    />
                </div>
            </Tooltip>

            <RedirectInfo
                text="need an Account? "
                redirectText="create account"
                additionalStyles={{ marginTop: "5px" }}
                redirectHandler={handelPushToRegisterPage}
            />
        </>
    )
}

export default LoginPageFooter