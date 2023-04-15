import axios from 'axios';

const baseURL = 'http://localhost:8080/reservations'

class ReservationService{
    async createReservation(data) {
        try {
          const response = await axios.post(baseURL, data);
          console.log(response.data);
        } catch (error) {
          if (error.response) {
            alert(error.response.data.message);
          }
        }
    }
}

export default new ReservationService();