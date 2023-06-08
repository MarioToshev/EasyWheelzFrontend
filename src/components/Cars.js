import React, { useState, useEffect } from 'react'
import { Container, Box, InputLabel, Select, MenuItem, FormControl, Button } from '@mui/material';
import Car from './Car';
import CarService from '../services/CarService';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Cars() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sorting, setSorting] = useState('');
  const [brand, setBrand] = useState('');

  const [brands, setBrands] = useState([]);


    
  const [cars, setCars] = useState([]);


  const clearFilters =()=>{
    setStartDate(null);
    setEndDate(null);
    setSorting('');
    setBrand('');
  }

  const handleFiltering = () => {

   const data = {
      startDate: startDate,
      endDate: endDate,
      brand: brand,
      sorting: sorting
    }
    console.log(data);
   CarService.filterCars(data).then(response => {
    console.log(response);
      setCars(response);});
      clearFilters();
      console.log(cars);
  }



  useEffect(() => {
    handleFiltering();
    CarService.getAllCarBrands().then(response => setBrands(response));
  }, []);


  const currentDate = new Date();
  function isBeforeToday(date) {
    return date < currentDate;
  }
  function isBeforeStartDay(date) {
    return date < startDate;
  }


  return (
    <Box sx={{ pt: 10, pl: 15 }}>

      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DatePicker sx={{ pr: 2 }} value={startDate}
          onChange={(date) => setStartDate(date)}
          shouldDisableDate={isBeforeToday}
          placeholderText="Select a date other than today or yesterday" />

        <DatePicker sx={{ pr: 2 }} value={endDate}
          onChange={(date) => setEndDate(date)}
          shouldDisableDate={isBeforeStartDay}
          placeholderText="Select a date other than today or yesterday" />
      </LocalizationProvider>

      <FormControl sx={{ width: 200, pr: 2 }}>
        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brand}
          label="brand"
         onChange={(event) => setBrand(event.target.value)}
        >
          {brands && brands.map(brand => 
          <MenuItem value={brand}>{brand}</MenuItem>
          )}
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200, pr: 2 }}>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="price"
          value={sorting}
         onChange={(event) => {setSorting(event.target.value)
        }}
        >
          <MenuItem value={"ascending"}>Ascending </MenuItem>
          <MenuItem value={"descending"}>Descending</MenuItem>
        </Select>
      </FormControl>
      <Button  variant='contained' onClick={handleFiltering}> Apply filters</Button>

      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', pt: 5 }}>

        {
          cars && cars.map(car => {
            return (
              <Car key={car.id} car={car} />)

          })
        }
      </Box>
    </Box>


  )
}

export default Cars;
