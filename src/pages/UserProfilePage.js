import React from 'react'
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
import LogOut from '../components/LogOut';

export default function UserProfilePage() {

  const email = JSON.parse(localStorage.getItem('DecodedToken')).sub;
  console.log(email);
  return (
    <Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    <Typography variant='h4'>Profile</Typography>
    <br/>

    <Typography>Welcome back {email}</Typography>
    <LogOut/>
    </Container>
  )
}
