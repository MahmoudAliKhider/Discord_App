import React, { useEffect, useState } from 'react'
import AuthBox from "../../../components/authBox"
import { Typography } from '@mui/material';
import RegisterInput from './RegisterInput';
import RegisterFooter from './RegisterFooter';
import { validateRegisterForm } from "../../../utils/validator";
import { useDispatch, useSelector } from "react-redux"
import { getActions } from "../../../Redux/actions/authAction";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValidate, setIsFormValidate] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.auth.userDetails);

  useEffect(() => {
    setIsFormValidate(validateRegisterForm({ mail, password, username }))
  }, [mail, password, isFormValidate]);

  const handleRegister = () => {
    const userDetails = {
      mail,
      username,
      password
    }
    const { register } = getActions(dispatch)
    register(userDetails, navigate)
  }

  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: "#092635" }}>
        Create a new account
      </Typography>
      <RegisterInput
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterFooter isFormValid={isFormValidate} handleRegister={handleRegister} />
    </AuthBox>
  )
}

export default Register;