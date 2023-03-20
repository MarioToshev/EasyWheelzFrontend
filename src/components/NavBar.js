import React from 'react'
import { Box,CssBaseline,AppBar,Toolbar,Typography,Button } from '@mui/material';
import Register from './Register';
import { NavLink } from 'react-router-dom';



const navItems = [{name:"Home", link:"/home"}, {name:"Cars", link:"/cars"}, {name:"Register", link:"/register"}, {name:'Login' , link:"/login"}];

function handleClick(link) {      
  
  }

export default function NavBar(props) {

  return (
    <Box sx={{ display: 'flex'}}>
    <CssBaseline />
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          EasyWheelz
        </Typography>
        <Box>
          {navItems.map((item) => (
            <NavLink to={item.link}>
            <Button key={item.name} sx={{ color: '#fff' }} onClick={() => { handleClick(item.link); }}>
              {item.name}
            </Button>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  </Box>);
}
