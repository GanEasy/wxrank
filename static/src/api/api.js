
import axios from 'axios'


// axios.defaults.baseURL = 'http://wb.readfollow.com';
axios.defaults.baseURL = 'http://api.readfollow.com';
// axios.defaults.baseURL = 'http://localhost:8005';
// axios.defaults.baseURL = '/api';

export default {

  get(data, callback){
    axios.get(data).then(
        (response) => {
        callback(null, response.data)
    })
  },  
  post(url, callback){
    axios.post("/post","url="+encodeURIComponent(url)).then(
        (response) => {
        callback(null, response.data)
    })
  },
}

