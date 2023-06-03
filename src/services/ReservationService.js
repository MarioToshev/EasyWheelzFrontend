import axios from 'axios';
import { toast } from 'react-toastify';


const baseURL = 'http://localhost:8080/reservations'

class ReservationService{
    async createReservation(data) {
      const token = JSON.parse(localStorage.getItem('EncodedToken'));
       return await axios.post(baseURL, data, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(response => {
            if (response.status === 201) {
              toast.success('Action succesfull!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
            return response;
          })
         .catch ((error) => {
          toast.error('There was a problem renting that car', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });

      }

    getAllReservatiosOfUserOrdered(userId){
      console.log(userId);
      const token = JSON.parse(localStorage.getItem('EncodedToken'));
      return axios.get(`${baseURL}/history/${Number(userId)}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then((response) => { return response.data; });
    }
      
}

export default new ReservationService();