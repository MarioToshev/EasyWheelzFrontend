import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
  FormControl,
  InputLabel,
  Input,
  CssBaseline,
  Typography,
} from '@mui/material';
import CarService from '../services/CarService';
import NotificationComponent from './NotificationComponent';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Client, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';


const CarForm = () => {
  const [licensePlate, setLicensePlate] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [pricePerDay, setPricePerDay] = useState(0);
  const [color, setColor] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleLicensePlateChange = (event) => {
    setLicensePlate(event.target.value);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };
  const handleModelChange = (event) => {
    setModel(event.target.value);
  };
  const handlePricePerDayChange = (event) => {
    setPricePerDay(event.target.value);
  };
  useEffect(() => {
      setupStompClient();
  }, []);

  const [stompClient, setStompClient] = useState();

  const setupStompClient = () => {
    const stompClient1 = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });
    console.log(stompClient1)

    stompClient1.onConnect = () => {
      stompClient1.subscribe('/topic/publicmessages', (data) => {
      });
    };

    stompClient1.activate();
    setStompClient(stompClient1);
  };

  const sendMessage = (message) => {
   stompClient.publish({ destination: '/topic/publicmessages', body: JSON.stringify(message) });
  };


  const handleSubmit =()=> {
    const data = {
      licensePlate: licensePlate,
      model: model,
      brand: brand,
      pricePerDay: pricePerDay,
      color: color,
    };

      CarService.createCar(data)
      .then (() => {
        console.log(stompClient);
        setupStompClient();
       sendMessage(`${data.color} ${data.brand} ${data.model} was just added`);
       })
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ mx: 'auto', pt: '150px' }}>
      <Typography variant="h4">Add new car</Typography>
      <br />

      <CssBaseline />
        <FormControl fullWidth>
          <InputLabel htmlFor="licensePlate">License plate</InputLabel>
          <Input
            id="licensePlate"
            type="text"
            value={licensePlate}
            onChange={handleLicensePlateChange}
          />
          <br />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="brand">Brand</InputLabel>
          <Input
            id="brand"
            type="text"
            value={brand}
            onChange={handleBrandChange}
          />
          <br />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="model">Model</InputLabel>
          <Input
            id="model"
            type="text"
            value={model}
            onChange={handleModelChange}
          />
          <br />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="pricePerDay">Price per day</InputLabel>
          <Input
            id="pricePerDay"
            type="text"
            value={pricePerDay}
            onChange={handlePricePerDayChange}
          />
          <br />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="color">Color</InputLabel>
          <Input
            id="color"
            type="text"
            value={color}
            onChange={handleColorChange}
          />
        </FormControl>
        <br />
        <br />
        <Button type="submit" onClick= {handleSubmit} variant="contained" fullWidth >
          Add
        </Button>

    
    </Container>
  );
};

export default CarForm;
