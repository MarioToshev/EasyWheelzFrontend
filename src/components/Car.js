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
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
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