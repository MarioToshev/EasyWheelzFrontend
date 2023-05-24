import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Client } from '@stomp/stompjs';

const NotificationComponent = (props) => {
  const [stompClient, setStompClient] = useState();
  const [message, setMessage] = useState('');
  const [messagesReceived, setMessagesReceived] = useState([]);
  

  useEffect(() => {
    if (!stompClient) {
      setupStompClient();
    }
    if(props.message){
      sendMessage(message)
    }
  }, []);

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
        toast(message);
      }
    };

  return (<></>
    // <div>
    //   <h1>Notifications</h1>
    //   <input
    //     type="text"
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //     placeholder="Type a message..."
    //   />
    //   <button onClick={sendMessage}>Send Message</button>
    // </div>
  );
};

export default NotificationComponent;
