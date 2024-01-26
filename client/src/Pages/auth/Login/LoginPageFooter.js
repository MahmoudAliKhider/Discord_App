import React from 'react'
import { useNavigate } from 'react-router-dom';

import CustomPrimaryButton from '../../../components/CustomPrimaryButton'
import RedirectInfo from '../../../components/RedirectInfo'

const LoginPageFooter = ({ handleLogin, isFormValid }) => {

    const navigate = useNavigate();
    const handelPushToRegisterPage = () => {
        navigate('/register')
    }

    return (
        <>
            <div>
                <CustomPrimaryButton
                    label="Login"
                    additionalStyles={{ marginTop: "30px" }}
                    disabled={isFormValid}
                    onClick={handleLogin}
                />
            </div>
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