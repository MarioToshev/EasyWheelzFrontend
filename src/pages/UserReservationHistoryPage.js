import React, {useState, useEffect}from 'react'
import ReservationHistory from '../components/ReservationHistory';
import ReservationService from '../services/ReservationService';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function UserReservationHistoryPage() {

  const location = useLocation();
  const { userId, userName } = location.state;

    const [reservations, setReservations] = useState([]);
  
    const getReservations= () => {
      ReservationService.getAllReservatiosOfUserOrdered(userId)
      .then(response => setReservations(response));
      console.log(reservations);
    }

    useEffect(() => {
      console.log(userId,userName);
        getReservations();
    },userId)
  return (
    <>
    <br />
    <br />
    <br /> 
    <br />  
    <Typography variant='h5'> Reservatios of {userName} </Typography>
    <br />
    {reservations && reservations.length > 0 ? (
  <ReservationHistory reservations={reservations} />
) : (
  <p>No reservations yet</p>
)}
   
    </>
  )
}
