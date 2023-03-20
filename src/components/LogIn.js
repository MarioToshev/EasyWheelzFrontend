import React, { useState } from 'react';
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
import axios from 'axios';



// const api = axios.create({
//   baseURL: 'http://localhost:8080'
// });

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
 
  const handleSubmit = async (event) => {
    // event.preventDefault();
    // const data = {
    //   firstName: firstName,
    //   lastName:lastName ,
    //   email: email,
    //   phone: phoneNumber,
    //   driverLicense: licenceNumer,
    //   role: {
    //     id: 3,
    //     roleName: "Customer"
    //   }
    // };
    // try {
    //   const response = await axios.post('http://localhost:8080/users', data);
    //   console.log(response.data); // Handle successful response
    // } catch (error) {
    //   console.error(error); // Handle error
    // }
  };
  

  return (
    <Container component="main" maxWidth="xs" sx={{mx: 'auto',pt:'150px'}}>

      <Typography variant='h4'>Log in</Typography>
      <br/>

    <CssBaseline />
    <form onSubmit={handleSubmit}>


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
        type="submit"
        variant="contained"
        fullWidth
      >
        LogIn
      </Button>
    </form>
    </Container>
  );
};

export default LogIn;