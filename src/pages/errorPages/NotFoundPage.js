import React from 'react'
import {
  Typography,
  Grid,
} from '@mui/material';

export default function NotFoundPage() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
        </Grid>
        <Typography variant="h5">PAGE NOT FOUND</Typography>
        <br />
        <br />
        <img src="https://res.cloudinary.com/dxg6ys3z5/image/upload/v1683011577/pngwing.com_iravhh.png" draggable="false" alt="404 img" width="300" height="300"></img>
      </Grid>

    </>
  )
}
