
import axios from 'axios'


// axios.defaults.baseURL = 'http://wb.readfollow.com';
axios.defaults.baseURL = 'http://localhost:8004/api';
// axios.defaults.baseURL = '/';

export default {
  getNew(data, callback){
    axios.get(data).then(
        (response) => {
        callback(null, response.data)
    })
  },
  view(id, callback){
    axios.get("/view/"+id).then(
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

