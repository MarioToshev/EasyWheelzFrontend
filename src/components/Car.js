import React from 'react'
import {
  Container, Card, CardMedia, CardContent,
  Typography, CardActions, Button, Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Car(props) {
  const navigate = useNavigate();

  const redirectToRentCar = () => {
    navigate(
      '/rentCar',
      { state: { car: props.car } }
    );
  }

  const redirectToEditCar = () => {
    navigate(
      '/editCar',
      { state: { car: props.car } }
    );
  }


  return (

    <Grid sx={{ maxWidth: 352, m: 3 }}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          sx={{ width: 350, height: 250, p: 1 }}
          image={props.car.photoUrl}
          alt="car photo"
        />
        <CardContent sx={{ flexGrow: 1, maxWidth: 400 }}>
          <Typography gutterBottom variant="h5" component="h2">
           {props.car.brand} {props.car.model}
          </Typography>
          <ul>
            <li>License Plate: {props.car.licensePlate}</li>
            <li>Color: {props.car.color}</li>
            <li>Brand: {props.car.brand}</li>
            <li>Model: {props.car.model}</li>
            <li>Price per day: {props.car.pricePerDay}</li>
          </ul>
        </CardContent>
        <CardActions>

          <Button size="small" onClick={redirectToRentCar}>Rent Now</Button>
          <Button size="small" onClick={redirectToEditCar}>Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default Car;