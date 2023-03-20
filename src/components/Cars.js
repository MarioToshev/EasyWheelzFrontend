import React from 'react'
import {Container, Box} from '@mui/material';
import Car from './Car';
const cars = [
    {
        id: 2131232,
        licencePlate: 3243252443,
        model: 'Supra',
        brand: 'Toyota',
        pricePerDay : 15.30,
        color : 'red',
        availability: true
    },
    {
        id: 23445334,
        licencePlate: 6563252443,
        model: 'XC90',
        brand: 'Volvo',
        pricePerDay : 8.90,
        color : 'Black',
        availability: true
    },
    {
        id: 23445334,
        licencePlate: 6563252443,
        model: 'XC90',
        brand: 'Volvo',
        pricePerDay : 8.90,
        color : 'Black',
        availability: true
    },
    {
        id: 23445334,
        licencePlate: 6563252443,
        model: 'XC90',
        brand: 'Volvo',
        pricePerDay : 8.90,
        color : 'Black',
        availability: true
    },

  ]
const Cars = () =>  {
  return (
    <Box sx={{display:'flex', flexDirection: 'row',flexWrap:'wrap', pt:10,pl:15}}>
   
      {cars.map(car => (
        <Car key={car.id} car={car} />  
      ))}
    </Box>
  )
}
export default Cars;
