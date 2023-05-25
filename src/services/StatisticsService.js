import React from 'react'
import axios from 'axios';
const  baseURL = 'http://localhost:8080/statistics'

class StatisticsService{

    getRentedCarsStat(){
        const token = JSON.parse(localStorage.getItem('EncodedToken'));
          return axios.get(baseURL + '/reservations',{
            headers: {
              Authorization: "Bearer " + token,
            },
          })
            .then((response) => {return response.data})
      }
      getIncomeStat(){
        const token = JSON.parse(localStorage.getItem('EncodedToken'));
          return axios.get(baseURL + '/income',{
            headers: {
              Authorization: "Bearer "+ token,
            },
          })
            .then((response) => {return response.data})
      }
       getBrandStat(){
        const token = JSON.parse(localStorage.getItem('EncodedToken'));
          return axios.get(baseURL +'/brand',{
            headers: {
              Authorization: "Bearer " + token,
            },
          })
            .then((response) => {return response.data})
      }


    
}


export default new StatisticsService() 

