import React from 'react'
import {
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function LogOut() {

const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        navigate("/login")
        navigate(0)

    }

  return (
    <form onSubmit={handleLogOut}>
      <Button className='primary' type='submit'> Log out</Button>
    </form>
  )
}
