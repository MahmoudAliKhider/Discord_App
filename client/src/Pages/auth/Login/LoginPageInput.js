import React from 'react'
import InputWithInput from '../../../components/inputWithInput'

const LoginPageInput = ({ mail, setMail, password, setPassword }) => {
    return (
        <>
            <InputWithInput
                value={mail}
                setValue={setMail}
                lable="E-mail"
                type="text"
                placeholder="Enter e-mail address"
            />

            <InputWithInput
                value={password}
                setValue={setPassword}
                lable="Password"
                type="password"
                placeholder="Enter password"
            />
        </>
    )
}

export default LoginPageInput