import axios from 'axios';
const baseURL = 'http://localhost:8080/cars';
const api = axios.create({
    baseURL: baseURL
  });


class CarService{
  async createCar(data) {
  try {
    const response = await axios.post(baseURL,data);
    console.log(response.data);
  } catch (error) {
    if (error.response) {
        alert(error.response.data.message);
    }
  }
 }
  async  GetAllCarsCar() {
       await   axios.get(baseURL)
        .then(response => 
          {
            console.log(response.data);
            console.log(response);
            return response.data
          }
         )
        .catch((error) => {
            console.log(error.response.data.message);
        })
    }
}

export default new CarService();
