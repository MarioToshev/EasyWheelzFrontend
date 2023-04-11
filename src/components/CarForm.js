import React , {useState} from 'react'
import {
    Container,
    Button,
    FormControl,
    InputLabel,
    Input,
    CssBaseline,
    Typography,
  } from '@mui/material';
  import CarService from '../services/CarService';



  




const CarForm = () => {
    
    const [licensePlate, setLicensePlate] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [pricePerDay, setPricePerDay] = useState(0);
    const [color, setColor] = useState('');



    const handleLicensePlateChange = (event) => {
        setLicensePlate(event.target.value);
      }
      const handleColorChange = (event) => {
        setColor(event.target.value);
      }
      const handleBrandChange = (event) => {
        setBrand(event.target.value);
      }
      const handleModelChange = (event) => {
        setModel(event.target.value);
      }
      const handlePricePerDayChange = (event) => {
        setPricePerDay(event.target.value);
      }

      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            licensePlate: licensePlate,
            model:model ,
            brand: brand,
          pricePerDay: pricePerDay,
          color: color
          }
          CarService.createCar(data);
        };
      


  return (
    <Container component="main" maxWidth="xs" sx={{mx: 'auto',pt:'150px'}}>
    <Typography variant='h4'>Add new car</Typography>
    <br/>

  <CssBaseline />
  <form onSubmit={handleSubmit}>
  <FormControl fullWidth>
      <InputLabel htmlFor="licensePlate">License plate</InputLabel>
      <Input
        id="licensePlate"
        type="text"
       value={licensePlate}
        onChange={handleLicensePlateChange}
      />
    <br/>
    </FormControl>
    <FormControl fullWidth>
      <InputLabel htmlFor="brand">Brand</InputLabel>
      <Input
        id="brand"
        type="text"
        value={brand}
       onChange={handleBrandChange}
      />
    <br/>
    </FormControl>
    <FormControl fullWidth>
      <InputLabel htmlFor="model">Model</InputLabel>
      <Input
        id="model"
        type="text"
        value={model}
        onChange={handleModelChange}
      />
    <br/>
    </FormControl>

  
    <FormControl  fullWidth>
      <InputLabel htmlFor="pricePerDay">Price per date</InputLabel>
      <Input
        id="pricePerDay"
        type="text"
        value={pricePerDay}
        onChange={handlePricePerDayChange}
      />
    <br/>
    </FormControl>
    <FormControl  fullWidth>
      <InputLabel htmlFor="color">Color</InputLabel>
      <Input
        id="color"
        type="text"
       value={color}
       onChange={handleColorChange}
      />
    </FormControl>
    <br/>
    <br/>
    <Button
      type="submit"
      variant="contained"
      fullWidth
    >
      Add
    </Button>
  </form>
  </Container>
  )
}
export default CarForm;