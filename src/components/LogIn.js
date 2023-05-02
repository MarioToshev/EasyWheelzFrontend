import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  CssBaseline,
  Typography,
} from '@mui/material';
import LogInService from '../services/LogInService';
import { useNavigate } from 'react-router-dom';



const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
 
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
 
  const handleSubmit = async () => {
    let data = {
      email: email,
      password: password
    }

    const response = await LogInService.login(data) 
    
    if(response != null) {
      navigate("/cars")
    }
    navigate(0);
  };
  

  return (
    <Container component="main" maxWidth="xs" sx={{mx: 'auto',pt:'150px'}}>

      <Typography variant='h4'>Log in</Typography>
      <br/>

    <CssBaseline />
    <form>


      <FormControl fullWidth>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          aria-describedby="email-helper-text"
        />
      <br/>
      </FormControl>
      <FormControl  fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      <br/>
      <br/>
      </FormControl>
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
      >
        LogIn
      </Button>
    </form>
    </Container>
  );
};

export default LogIn;