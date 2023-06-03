import React, { useState } from 'react';
import {
  Container,
  Button,
  FormControl,
  InputLabel,
  Input,
  CssBaseline,
  Typography,Select, MenuItem,
} from '@mui/material';
import UserService from '../services/UserService'

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




export default function UpdateForm() {

    const location = useLocation();
  const user = location.state;

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState(user.user.firstName);
    const [lastName, setLastName] = useState(user.user.lastName);
    const [phoneNumber, setPhoneNumber] = useState(user.user.phone);
    const [role, setRole] = useState(user.user.role.roleName);
    const [email, setEmail] = useState(user.user.email);
    const [licenceNumer, setLicenceNumer] = useState(user.user.driverLicense);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(role)
      const data = {
        firstName: firstName,
        lastName:lastName ,
        email: email,
        phone: phoneNumber,
        driverLicense: licenceNumer,
        role : role,
      };
        UserService.updateUser(data).then(() => {  navigate("/users")});
    };
    
  
    return (
      <Container component="main" maxWidth="xs" sx={{mx: 'auto',pt:'150px'}}>
  
        <Typography variant='h4'>Update user</Typography>
        <br/>
  
      <CssBaseline />
      <form onSubmit={handleSubmit}>
      <FormControl fullWidth>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            id="firstName"  
            type="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        <br/>
        </FormControl>
  
        <FormControl fullWidth>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input
            id="lastName"
            type="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        <br/>
        </FormControl>
  
        <FormControl fullWidth>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-describedby="email-helper-text"
          />
        <br/>
        </FormControl>
      
  
        <FormControl  fullWidth>
          <InputLabel htmlFor="licenceNumer">Driving licence number</InputLabel>
          <Input
            id="licenceNumer"
            type="licenceNumer"
            value={licenceNumer}
            onChange={(event) => setLicenceNumer(event.target.value)}
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
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </FormControl>
        <br/>
        <br/>

        <FormControl sx={{ width: 200, pr: 2 }}>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="brand"
         onChange={(event) => setRole(event.target.value)}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Customer">Customer</MenuItem>
        </Select>
      </FormControl>
        <br/>
        <br/>

        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Submit
        </Button>
      </form>
      </Container>
    );
  };
