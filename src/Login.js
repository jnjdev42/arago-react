import './App.css';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Base64 } from 'js-base64';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Login() {

  const [formData, setFormData] = useState({email: '', password: ''});
  const [apiErr, setApiErr] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://localhost:5001/auth/login", formData)
    .then((res) => {
        localStorage.setItem("access_token", res.data.token);
        setLoggedIn(true);
    })
    .catch(() => {
        setApiErr("Vos identifiants sont incorrects.");
        console.log(apiErr);
    });
  }

  return (
    <div className="Login">
      {
        loggedIn ? 
        <Navigate to="/" /> : 
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="title">Connectez-vous</h1>
            <TextField onChange={(e) => handleChange(e)} id="email" name="email" label="Email" variant="outlined" />
            <TextField type="password" onChange={(e) => handleChange(e)} id="pwd" name="password" label="Mot de passe" variant="outlined" />
            <Button type="submit" variant="contained">Login</Button>
        <p className="errMess">{apiErr}</p>
        </form>
      }
    </div>
  );
}

export default Login;
