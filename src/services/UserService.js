import axios from 'axios';

const  baseURL = 'http://localhost:8080/users'



class UserService{

  getAllUsers(){
      return axios.get(baseURL)
        .then((response) => {return response.data})
  }

  deleteUser(data){
     axios.delete(`${baseURL}/${data}`);
}

  async registerUser(data) {
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

export default new UserService();
