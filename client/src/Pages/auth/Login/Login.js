import React, { useState } from 'react'
import AuthBox from "../../../components/authBox";
import LoginHeader from './LoginHeader';
import LoginPageInput from './LoginPageInput';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthBox>
      <LoginHeader />
      <LoginPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
    </AuthBox>
  )
}

export default Login;