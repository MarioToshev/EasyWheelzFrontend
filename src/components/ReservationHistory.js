import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Typography,Button} from '@mui/material';
function ReservationHistory(props) {
  return (
    <>
    <br/>
    <br/>
    <br/>
    
    <Typography> </Typography>
    <br/>
    
        <Table size="small" sx={{pt: 10, pl: 15 }}>
        <TableHead>
          <TableRow>
            <TableCell><b>Start Date</b></TableCell>
            <TableCell><b>End Date</b></TableCell>
            <TableCell><b>Car</b></TableCell>
            <TableCell><b>Price per day</b></TableCell>
            <TableCell><b>Total price</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.reservations && props.reservations.map((res) => (
            <TableRow key={res.id}>
              <TableCell>{res.pickUpDate}</TableCell>
              <TableCell>{res.returnDate}</TableCell>
              <TableCell>{res.car.brand} {res.car.model}</TableCell>
              <TableCell>{res.car.pricePerDay}</TableCell>
              <TableCell>{res.totalCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </>
  )
}

export default  ReservationHistory;