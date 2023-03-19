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



const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [licenceNumer, setLicenceNumer] = useState('');
  const [passwordErrMsg, setPasswordErrMsg] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value!== password) {
      setPasswordErrMsg('Passwords do not match'); 
    }
    else {
      setPasswordErrMsg();
    }
  };
  const handleLicenceNumerChange = (event) => {
    setLicenceNumer(event.target.value);
  };

  const handlePhoneNumberChange = (event) => { 
    setPhoneNumber(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName:lastName ,
      email: email,
      phone: phoneNumber,
      driverLicense: licenceNumer,
      role: {
        id: 1,
        roleName: "Customer"
      }
    };
    try {
      const response = await axios.post('http://localhost:8080/users', data);
      console.log(response.data); // Handle successful response
    } catch (error) {
      console.error(error); // Handle error
    }
  };
  

  return (
    <Container component="main" maxWidth="xs" sx={{mx: 'auto',pt:'150px'}}>

      <Typography variant='h4'>Register</Typography>
      <br/>

    <CssBaseline />
    <form onSubmit={handleSubmit}>
    <FormControl fullWidth>
        <InputLabel htmlFor="firstName">First Name</InputLabel>
        <Input
          id="firstName"
          type="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      <br/>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel htmlFor="lastName">Last Name</InputLabel>
        <Input
          id="lastName"
          type="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      <br/>
      </FormControl>

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
      </FormControl>
      <FormControl  fullWidth>
        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </FormControl>
      {passwordErrMsg && (
        <a style={{ color: 'red' }}>{passwordErrMsg}</a>
      )}
      <br/>
      <br/>

      <FormControl  fullWidth>
        <InputLabel htmlFor="licenceNumer">Driving licence number</InputLabel>
        <Input
          id="licenceNumer"
          type="licenceNumer"
          value={licenceNumer}
          onChange={handleLicenceNumerChange}
        />
      </FormControl>
      <br/>
      <br/>
      <FormControl  fullWidth>
        <InputLabel htmlFor="phoneNumber">Phone number</InputLabel>
        <Input
          id="phoneNumber"
          type="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </FormControl>
      <br/>
      <br/>
      <Button
        type="submit"
        variant="contained"
        fullWidth
      >
        Register
      </Button>
    </form>
    </Container>
  );
};

export default Register;