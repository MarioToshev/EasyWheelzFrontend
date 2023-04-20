import React, { useState, useEffect } from 'react'
import { Container, Box } from '@mui/material';
import Car from './Car';
import CarService from '../services/CarService';
import axios from 'axios';

const baseURL = 'http://localhost:8080/cars';

// const cars = [
//     {
//         id: 2131232,
//         licencePlate: 3243252443,
//         model: 'Supra',
//         brand: 'Toyota',
//         pricePerDay : 15.30,
//         color : 'red',
//         availability: true
//     },
//     {
//         id: 23445334,
//         licencePlate: 6563252443,
//         model: 'XC90',
//         brand: 'Volvo',
//         pricePerDay : 8.90,
//         color : 'Black',
//         availability: true
//     },
//     {
//         id: 23445334,
//         licencePlate: 6563252443,
//         model: 'XC90',
//         brand: 'Volvo',
//         pricePerDay : 8.90,
//         color : 'Black',
//         availability: true
//     },
//     {
//         id: 23445334,
//         licencePlate: 6563252443,
//         model: 'XC90',
//         brand: 'Volvo',
//         pricePerDay : 8.90,
//         color : 'Black',
//         availability: true
//     },

//   ]


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
