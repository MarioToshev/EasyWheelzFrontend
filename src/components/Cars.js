import React, { useState, useEffect } from 'react'
import { Container, Box } from '@mui/material';
import Car from './Car';
import CarService from '../services/CarService';

function Cars() {

  const [cars, setCars] = useState([]);


  useEffect(() => {
    CarService.GetAllCarsCar().then(cars => {
      setCars(cars);
    });
  }, []);

  return (

    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', pt: 10, pl: 15 }}>
      {
        cars && cars.map(car => {
          return (
            <Car key={car.id} car={car} />)
            
        })
      }
    </Box>

  )
}

export default Cars;
