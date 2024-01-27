// components/Login.js
import React, { useEffect, useState } from 'react';
import AuthBox from '../../../components/authBox';
import LoginHeader from './LoginHeader';
import LoginPageInput from './LoginPageInput';
import LoginPageFooter from './LoginPageFooter';
import { useDispatch, useSelector } from 'react-redux';
import { validateLoginForm } from '../../../utils/validator';
import { getActions } from '../../../Redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.auth.userDetails);

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password]);

  const handleLogin = () => {
    const userDetails = {
      mail,
      password,
    };
    const { login } = getActions(dispatch);
    login(userDetails, navigate);
  };


  useEffect(() => {
    if (userDetails) {
      localStorage.setItem('user', JSON.stringify(userDetails));
      navigate('/dashboard');
    }
  }, [userDetails]);

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
  );
};

export default Login;