import React from 'react'
import InputWithInput from "../../../components/inputWithInput";

const RegisterInput = (props) => {
    const { mail, setMail, password, setPassword, username, setUsername } = props

    return (
        <>
            <InputWithInput
                value={username}
                setValue={setUsername}
                lable="UserName"
                type="text"
                placeholder="Enter Your Name"
            />
            <InputWithInput
                value={mail}
                setValue={setMail}
                lable="E-Mail Address"
                type="email"
                placeholder="Enter Your Email"
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

export default RegisterInput