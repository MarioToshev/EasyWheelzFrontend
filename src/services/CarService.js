import axios from 'axios';
const baseURL = 'http://localhost:8080/cars';



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
  GetAllCarsCar() {
    return axios.get(baseURL)
      .then(response => { return response.data });
  }
}

export default new CarService();
