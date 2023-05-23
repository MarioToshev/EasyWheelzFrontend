import React, { useState } from "react";

import { Button, Box, Card, CardMedia, Typography } from "@mui/material";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ReservcationService from "../services/ReservationService";
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


function RentCar() {
  const navigate = useNavigate();


 
  const { state } = useLocation();
  const car = state.car;

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    if (startDate != null && endDate != null) {
      var difference = endDate - startDate + 1;

      setTotalPrice(Math.ceil(difference / (1000 * 3600 * 24)) * car.pricePerDay);
    }
  }



  const rentCar = () => {
    const email = returnEmailIfUserIsLogged();
    if(email){
      sendRentRequest(email);
    }
    else{
      navigate('/login')
    }
  }
  const returnEmailIfUserIsLogged = () =>{
    if(localStorage.getItem('DecodedToken')){
      return JSON.parse(localStorage.getItem('DecodedToken')).sub;
    }
  }
const sendRentRequest= (email) => {
  calculateTotalPrice();
  console.log(email);
    ReservcationService.createReservation({
      pickUpDate: startDate,
      returnDate: endDate,
      rentalRate: car.pricePerDay,
      totalCost: totalPrice,
      customerEmail: email,
      car: car,
    }).then(response => {
      if(response.status === 201){
        navigate('/profile')
      }
     });

   
}



  const currentDate = new Date();
  function isBeforeToday(date) {
    return date < currentDate;
  }
  function isBeforeStartDay(date) {
    return date < startDate;
  }


  return (
    <>
      <br />
      <br />
      <Card
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: 24,
        }}
      >

        <Typography variant="h2" component="h2" align="center">
          Car Details
        </Typography>
        <br />
        <br />



        <CardMedia
          component="img"
          sx={{
            maxWidth: "40%",
            maxHeight: "30vh",
            mb: "20px",
            border: "3px solid #ccc",
            borderRadius: "10px"
          }}
          image={car.photoUrl}
          alt="car"
        />
        <Box sx={{
          fontWeight: 200, lineHeight: '24px', fontSize: '20px', color: 'black'
        }}>


          <LocalizationProvider dateAdapter={AdapterDayjs}>


            <DatePicker selected={startDate}
              onChange={(date) => setStartDate(date)}
              shouldDisableDate={isBeforeToday}
              placeholderText="Select a date other than today or yesterday" />


            <DatePicker selected={endDate}
              onChange={(date) => setEndDate(date)}
              shouldDisableDate={isBeforeStartDay}
              placeholderText="Select a date other than today or yesterday" />
          </LocalizationProvider>

          <ul>
            <li>License Plate: {car.licensePlate}</li>
            <li>Color: {car.color}</li>
            <li>Brand: {car.brand}</li>
            <li>Model: {car.model}</li>
            <li>Price per day: {car.pricePerDay}</li>
          </ul>

          <Button variant='contained' onClick={calculateTotalPrice}>Calculate total price</Button>
          <p> TOTAL PRICE : {totalPrice} </p>
          <Button  variant='contained' onClick={rentCar}>Rent now</Button>
        </Box>
      </Card>
    </>
  );
}

export default RentCar;
