import React, { useEffect, useState } from 'react'
import AuthBox from "../../../components/authBox";
import LoginHeader from './LoginHeader';
import LoginPageInput from './LoginPageInput';
import LoginPageFooter from './LoginPageFooter';
import { connect } from "react-redux"
import { validateLoginForm } from '../../../utils/validator';
import { getActions } from "../../../Redux/actions/authAction";
import { useNavigate } from 'react-router-dom';

const Login = ({ login }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }))
  }, [mail, password, setIsFormValid]);

  const handleLogin = () => {
    const useDetails = {
      mail,
      password
    }
    login(useDetails, navigate)
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

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}
export default connect(null, mapActionToProps)(Login);