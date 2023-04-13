import React from 'react'
import {Container, Card,CardMedia,CardContent,
Typography,CardActions,Button,Grid} from '@mui/material';

function Car(props) {
  return (

    <Grid sx={{maxWidth:352, m:3}}> 
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              sx={{ width: 350, height: 250,p:1}}
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1, maxWidth: 400 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Car
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
              <Button size="small">Rent Now</Button>
              <Button size="small">View</Button>
            </CardActions>
          </Card>
    </Grid>

   // <>
    //{console.log(props.car)}
    //<div>{props.car.brand}</div>
   // </>
  )
}
export default Car;