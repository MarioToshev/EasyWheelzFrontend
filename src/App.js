import React from 'react';
import NavBar from './components/NavBar';
import { Box, Typography } from '@mui/material';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Register from './components/Register';
import HomePage from './components/HomePage';
import Cars from './components/Cars';

import axios from 'axios';
import LogIn from './components/LogIn';

const API_URL = 'http://localhost:8080';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';




function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cars" element={<Cars />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
