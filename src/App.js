import React from 'react';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from './pages/Register';
import UsersPage from './pages/UsersPage';
import Cars from './components/Cars';
import CreateCarPage from './pages/CreateCarPage';
import EditCarPage from './pages/EditCarPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/errorPages/NotFoundPage';
import NotificationComponent from './components/NotificationComponent';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import axios from 'axios';
import LogIn from './components/LogIn';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import RentCar from './components/RentCar';
import { InputGroup } from 'react-bootstrap';



axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';




function App({children}) {
  let userRoles = [];

  if(localStorage.getItem('DecodedToken') !== null) {
    console.log(JSON.parse(localStorage.getItem('DecodedToken')));
     userRoles = JSON.parse(localStorage.getItem('DecodedToken')).roles;
  }

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/login" element={<LogIn />} />
          <Route path="/rentCar" element={<RentCar />} />
          
          {userRoles.includes("Admin") ? (
            <Route path="/createCar" element={<CreateCarPage />} />
          ) :   <Route path="/createCar" element={<NotFoundPage />} /> }

          {userRoles.includes("Admin") ? (
            <Route path="/users" element={<UsersPage />} />
          ) :   <Route path="/users" element={<NotFoundPage />} /> }

           {userRoles.includes("Admin") ? (
            <Route path="/editCar" element={<EditCarPage />} />
          ) :   <Route path="/editCar" element={<NotFoundPage />} /> }
          
          <Route path='/profile' element={<UserProfilePage/>}/>     
          {/* <Route path='/not' element={<NotificationComponent/>}/>      */}
        </Routes>


      </Router>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
    <NotificationComponent />
    <ToastContainer/>

    </>
  );
}

export default App;
