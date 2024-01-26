import React from 'react'
import CustomPrimaryButton from '../../../components/CustomPrimaryButton'

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
    return (
        <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            disabled={isFormValid}
            onClick={handleLogin}
        />
    )
}

export default LoginPageFooter