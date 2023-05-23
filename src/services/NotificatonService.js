// import React ,{useState}  from 'react'
// import {  toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Client } from '@stomp/stompjs';


// function NotificatonService() {

// const [stompClient, setStompClient] = useState();
     

//      setupStompClient = () => {
//       const stompClient = new Client({
//         brokerURL: 'ws://localhost:8080/ws',
//         reconnectDelay: 5000,
//         heartbeatIncoming: 4000,
//         heartbeatOutgoing: 4000
//       });
  
//       stompClient.onConnect = () => {
//         stompClient.subscribe('/topic/publicmessages', (data) => {
//           console.log(data);
//           onMessageReceived(data);
//         });
//       };
  
//       stompClient.activate();
//       setStompClient(stompClient);
//     };
  
//      sendMessage = () => {
//       const payload = message;
//       setupStompClient();
//        console.log(stompClient);
//        stompClient.publish({ 'destination': `/topic/publicmessages`, body: JSON.stringify(payload) });
//     };
  
//     //  onMessageReceived = (data) => {
//     //   const message = JSON.parse(data.body);
//     //   toast(message);
//     // };

//     return <></>;
// }



// export default function NotificatonService();
