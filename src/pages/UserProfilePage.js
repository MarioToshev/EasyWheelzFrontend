import React,{useState, useEffect} from 'react'

import ReservationHistory from '../components/ReservationHistory';
import ReservationService from '../services/ReservationService';
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
  const [reservations, setReservations] = useState([]);
  const token = JSON.parse(localStorage.getItem('DecodedToken'));

  const getReservations= () => {
    ReservationService.getAllReservatiosOfUserOrdered(token.userId)
    .then(response => setReservations(response));
    console.log(reservations);
  }

  useEffect(() => {
    getReservations();
}, []);

  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant='h4'>Profile</Typography>
      <br />

      <Typography>Welcome back {token.sub}</Typography>
      <LogOut />

      <br />
      <br />  
      <br />
      <Typography variant='h4'>Reservations</Typography>
        <ReservationHistory reservations = {reservations}/>

    </Container>
  )
}
