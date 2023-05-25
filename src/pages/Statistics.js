import React from 'react'
import RentedCarsEveryMonth from '../components/RentedCarsEveryMonth';
import MostRentedBrands from '../components/MostRentedBrands';
import { Container, Typography } from '@mui/material';
import IncomePerMonth from '../components/IncomePerMonth';


export default function Statistics() {
  return (<>

  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

  <Container>
  <Typography variant="h3"> Statistics</Typography>
  <br/>
  <br/>
  <br/>
  <br/>


  <RentedCarsEveryMonth/>

  <br/>

  <MostRentedBrands/>

  <br/>

    <IncomePerMonth/>
    </Container>

  </>
  )
}
