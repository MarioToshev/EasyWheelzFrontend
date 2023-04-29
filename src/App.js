import React from 'react';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Cars from './components/Cars';
import CreateCarPage from './pages/CreateCarPage';
import EditCarPage from './pages/EditCarPage';
import UserProfilePage from './pages/UserProfilePage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import axios from 'axios';
import LogIn from './components/LogIn';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import RentCar from './components/RentCar';



axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';




function App({children}) {

  return (
    <>
    <ToastContainer/>
      <Router>
        <NavBar />
        <Routes>3
          <Route path="/cars" element={<Cars />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/rentCar" element={<RentCar />} />
          <Route path="/createCar" element={<CreateCarPage />} />
          <Route path="/editCar" element={<EditCarPage />} />
          <Route path='/profile' element={<UserProfilePage/>}/>     

        </Routes>


      </Router>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
    </>
  );
}

export default App;
