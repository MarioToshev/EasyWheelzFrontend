import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  baseURL = 'http://localhost:8080/users'



class UserService{

  getAllUsers(){
    const token = JSON.parse(localStorage.getItem('EncodedToken'));
      return axios.get(baseURL,{
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => {return response.data})
  }

  deleteUser(data){
     axios.delete(`${baseURL}/${data}`);
}

   registerUser(data) {
      return axios.post(baseURL, data)
    .then((response) => {
      if (response.status === 201) {
        toast.success('Action successful !', {
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
  .catch ( error => {
   toast.error(error.response.data.message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  return Promise.reject(error);
  })
 }

}

export default new UserService();
