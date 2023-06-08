import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Client } from '@stomp/stompjs';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CarService from '../services/CarService';

const NotificationComponent = (props) => {

  const [stompClient, setStompClient] = useState();
  const [message, setMessage] = useState('');
  const [messagesReceived, setMessagesReceived] = useState([]);
  const [car, setCar] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!stompClient) {
      setupStompClient();
    }
    if(props.message){
      sendMessage(message)
    }
  }, []);

  const redirectToRentCar = (car) => {
    navigate(
      '/rentCar',
      { state: { car: car } }
    );
  }
  
  const setupStompClient = () => {
    const stompClient = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    stompClient.onConnect = () => {
      stompClient.subscribe('/topic/publicmessages', (data) => {
        console.log(data);
        onMessageReceived(data);
      });
    };

    stompClient.activate();
    setStompClient(stompClient);
  };

  const sendMessage = (message) => {
    stompClient.publish({ destination: '/topic/publicmessages', body: JSON.stringify(message) });
  };

    const onMessageReceived = (data) => {
      const message = JSON.parse(data.body);
      if (!messagesReceived.includes(message)) {
        setMessagesReceived((prevMessages) => [...prevMessages, message]);
        var payLoad = JSON.parse(message);
        
        toast(<Button onClick={() =>{
           CarService.GetCar(payLoad.id).then((response) => { redirectToRentCar(response)});
        }
        }>{payLoad.message}</Button>);
      }
    };

  return <></>;

};

export default NotificationComponent;
