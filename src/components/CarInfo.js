import React,{useState} from "react";

import {Button,List,ListSubheader,ListItem,Box, Card, CardMedia, Typography } from "@mui/material";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const CarCard = () => {


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const currentDate = new Date();
function isBeforeToday(date) {
    return date < currentDate;
  }
  function isBeforeStartDay(date) {
    return date < startDate;
  }
  

  return (
    
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "24px",
      }}
    >
         <Typography variant="h2" component="h2" align="center">
          Car Details
        </Typography>
        <br/>
        <br/>

      <CardMedia
        component="img"
        sx={{
          maxWidth: "60%",
          maxHeight: "50vh",
          mb: "24px",
          border: "3px solid #ccc",
          borderRadius: "10px"
        }}
        image="https://source.unsplash.com/random"
        alt="car"
      />
      <Box sx={{
        fontWeight: 300, lineHeight: '24px', fontSize: '24px', color: 'black'
      }}>
     

     <LocalizationProvider dateAdapter={AdapterDayjs}>


      <DatePicker  selected={startDate}
    onChange={(date) => setStartDate(date)}
    shouldDisableDate={isBeforeToday}
    placeholderText="Select a date other than today or yesterday" />


 <DatePicker  selected={endDate}
    onChange={(date) => setEndDate(date)}
    shouldDisableDate={isBeforeStartDay}
    placeholderText="Select a date other than today or yesterday" />



    </LocalizationProvider>

        <ul>
          <li>License Plate: ABC123</li>
          <li>Color: Red</li>
          <li>Make: Toyota</li>
          <li>Model: Corolla</li>
        </ul>
        <Button>Rent now</Button>
      </Box>
      
    </Card>
  );
};

export default CarCard;
