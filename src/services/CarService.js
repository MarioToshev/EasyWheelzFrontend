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
   async GetAllCarsCar() {
         await axios.get(baseURL)
        .then(response => { return response.data})
    //     .then(json => {
    //        console.log(json);
    //       return [json]
    //    })
        .catch((error) => {
            console.log(error.response);
        })
    }
}

export default new CarService();
