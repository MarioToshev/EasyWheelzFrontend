import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://localhost:8080/cars';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

class CarService {
  async createCar(data) {
    try {
      const response = await axios.post(baseURL, data);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  }
  async updateCar(data) {
    await axios.put(baseURL, data)
      .then(response => {
        if (response.status === 204) {
          toast.success('Action successful!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { backgroundColor: 'c9d07d' },
          });
        }
       
      }).catch( error => {
        toast.error(error.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { backgroundColor: 'c9d07d' },
        });
      }
      )
  }
  GetAllCarsCar() {
    return axios.get(baseURL)
      .then(response => { return response.data })
  }
  GetCar(carId) {
    return axios.get(`${baseURL}/${carId}`, carId)
      .then(response => { return response.data })
  }
  UploadPhoto(id, data) {
    const token = JSON.parse(localStorage.getItem('EncodedToken'));
    console.log(token);
    api.post(baseURL + `/${id}`, data,{
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(res => {
      if (res.status === 200) {
        toast.success('Action successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { backgroundColor: 'c9d07d' },
        });
      }
    }).catch(err => {
      toast.error(err.response.data.message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: 'c9d07d' },
      });
    })
  }
}

export default new CarService();
