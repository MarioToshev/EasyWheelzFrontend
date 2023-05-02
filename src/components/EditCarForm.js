import { useState, useEffect } from 'react';
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

  


function EditCarForm (props){
  const [selectedPicture, setSelectedPicture] = useState(null);
    const [licensePlate, setLicensePlate] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [pricePerDay, setPricePerDay] = useState(0);
    const [color, setColor] = useState('');

    useEffect(() => {
        setLicensePlate(props.car.licensePlate);
        setModel(props.car.model);
        setBrand(props.car.brand);
        setPricePerDay(props.car.pricePerDay);
        setColor(props.car.color);
      }, []);

      const handlePictureChange = (event) => {
        const picture = URL.createObjectURL(event.target.files[0]);
        setSelectedPicture(picture);
      };
    
      const handlePictureUpload = (event) => {
        event.preventDefault();
        const photoInput = document.querySelector('#photo');
        const photo = photoInput.files[0];
    
        const formData = new FormData();
        formData.append('photo', photo);
    
        console.log(photo);
        console.log(formData)
        try {
          CarService.UploadPhoto(props.car.id, formData);
        } catch (error) {
          console.log(error.data);
        }
      };
    
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
            id : props.car.id,
            licensePlate: licensePlate,
            model:model ,
            brand: brand,
            photoUrl: props.car.photoUrl,
          pricePerDay: pricePerDay,
          color: color
          }
          CarService.updateCar(data);
        };
      


  return (
    <Container component="main" maxWidth="xs" sx={{mx: 'auto',pt:'150px'}}>
    <Typography variant='h4'>Edit car</Typography>
    <br/>
    <Button
          name ="photo"
            className="btn-choose"
            variant="outlined"
            component="span" >

          <Input
           name="photo"
           required
           id="photo"
           type="file"
           autoFocus
           onChange={handlePictureChange}
           className='file-name' />
          </Button>
      <div className="file-name">
      </div>
      <br/>
      <Button
        className="btn-upload"
        color="primary"
        variant="contained"
        component="span"
        onClick={handlePictureUpload}>
        Upload photo
      </Button>


      <br/>
      <br/>
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
      Update
    </Button>
  </form>
  <br/>
  <br/>

  </Container>
  
  )
}
export default EditCarForm;