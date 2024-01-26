import React, { useState } from 'react'
import AuthBox from "../../../components/authBox";
import LoginHeader from './LoginHeader';
import LoginPageInput from './LoginPageInput';
import LoginPageFooter from './LoginPageFooter';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {

  }
  return (
    <AuthBox>
      <LoginHeader />
      <LoginPageInput
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  )
}

export default Login;