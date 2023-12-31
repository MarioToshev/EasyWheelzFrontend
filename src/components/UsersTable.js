import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Typography,Button} from '@mui/material';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import UserService from '../services/UserService';
import {  useNavigate } from 'react-router-dom'

function UsersTable(props) {

  const navigate = useNavigate();

    function refreshPage() {
        window.location.reload(false);
      }

    function  deleteUser (userId)  {
        confirmAlert({
          title: 'Confirm deletion',
          message: 'Are you you want to delete this user.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {
                refreshPage();
                UserService.deleteUser(userId)
              }
            },
            {
              label: 'No',
            }
          ]
        });
    }


    function getUserHistory(userId, userName){
      const url = '/history';
      const state = { userId: userId, userName: userName };
    
      navigate(url, { state: state });
    }


    function updateUser(user){
      const url = '/users/update';
      const state = { user: user };
    
      navigate(url, { state: state });
    }
    
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
        <TableCell><b>First Name</b></TableCell>
        <TableCell><b>Second Name</b></TableCell>
        <TableCell><b>Email</b></TableCell>
        <TableCell><b>Phone</b></TableCell>
        <TableCell><b>Driver License number</b></TableCell>
        <TableCell><b>Role</b></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {props.users.map((user) => (
        <TableRow key={user.id}>
          <TableCell>{user.firstName}</TableCell>
          <TableCell>{user.lastName}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>{user.driverLicense}</TableCell>
          <TableCell>{user.role.roleName}</TableCell>
          <TableCell><Button onClick={() => deleteUser(user.id)}>
             Delete
            </Button></TableCell>
          <TableCell><Button onClick={() => updateUser(user)}> Update</Button></TableCell>
          <TableCell><Button onClick={() => getUserHistory(user.id,(user.firstName + " "+ user.lastName))}> Reservation history</Button></TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  </>
  )
}

export default UsersTable;