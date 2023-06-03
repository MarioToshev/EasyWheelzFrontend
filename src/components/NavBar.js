import React, { useState, useEffect } from 'react'
import { Box, CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';



const navItems = [ { name: "Cars", link: "/cars" }, { name: "Register", link: "/register" },
{ name: 'Login', link: "/login" }];

const loggedCustomer = [{ name: "Cars", link: "/cars" }, { name: "Profile", link: "/profile" }];

const loggedAdmin = [{ name: "Users", link: "/users" }, { name: "Cars", link: "/cars" }, { name: "Statistics", link: "/stat" },{ name: 'Add Car', link: '/createCar' }, { name: " Profile", link: "/profile" }];


function handleClick(link) {
}

function getUserPages() {
  if (localStorage.getItem('DecodedToken') != null) {
    if (JSON.parse(localStorage.getItem('DecodedToken')).roles.includes("Customer")) {
      return loggedCustomer;
    }
    else if (JSON.parse(localStorage.getItem('DecodedToken')).roles.includes("Admin")) {
      return loggedAdmin;
    }
  }
  else {
    return navItems;
  }
}
function NavBar() {

  const [pages, setPages] = useState(getUserPages());

  useEffect(() => {
      setPages(getUserPages());
  }, []);
 

  return (
    <Box sx={{ display: 'flex' }}>
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
            {pages.map((item) => (
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
export default NavBar;