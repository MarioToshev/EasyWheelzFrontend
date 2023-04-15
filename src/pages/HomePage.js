import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersTable from '../components/UsersTable';
import UserService from '../services/UserService';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const HomePage= () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    UserService.getAllUsers().then(users => {
      setUserData(users);
      console.log(users)
  }
  )
}, []);

  return (
       <UsersTable users = {userData}/>
  );
}

export default HomePage;
