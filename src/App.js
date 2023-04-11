import React from 'react';
import NavBar from './components/NavBar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from './components/Register';
import HomePage from './pages/HomePage';
import Cars from './components/Cars';
import CarInfo from './components/CarInfo';
import CreateCarPage from './pages/CreateCarPage';


import axios from 'axios';
import LogIn from './components/LogIn';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';




function App({children}) {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/carInfo" element={<CarInfo />} />
          <Route path="/createCar" element={<CreateCarPage />} />
        </Routes>


      </Router>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
    </>
  );
}

export default App;
