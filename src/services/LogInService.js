import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt from 'jwt-decode'



const baseURL = 'http://localhost:8080/login'


class LogInService {

  login(data) {
     return axios.post(baseURL, data)
      .then(response => {
        const token = response.data.accessToken;
        const decToken = jwt(token);
        console.log(token);
        console.log(decToken);


         localStorage.setItem('EncodedToken',  JSON.stringify(token));
         localStorage.setItem('DecodedToken',JSON.stringify(decToken));
        if (response.status === 201) {
          toast.success('Welcome back!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
          });
        }
        return response.data;
      })
      .catch(error => {
        toast.error("Invalid credentials", {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
         return Promise.reject(error);
      }

      )
  }
}

export default new LogInService();
