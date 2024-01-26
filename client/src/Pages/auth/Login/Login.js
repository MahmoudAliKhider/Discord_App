import React, { useEffect, useState } from 'react'
import AuthBox from "../../../components/authBox";
import LoginHeader from './LoginHeader';
import LoginPageInput from './LoginPageInput';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../../utils/validator';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }))
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    console.log(mail)
    console.log(password)
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