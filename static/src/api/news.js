
import axios from 'axios'


axios.defaults.baseURL = 'http://wb.readfollow.com';
// axios.defaults.baseURL = '/';

export default {
  getNew(data, callback){
    axios.get(data).then(
        (response) => {
        callback(null, response.data)
    })
  },
  like(id, callback){
    axios.get("/like/"+id).then(
        (response) => {
        callback(null, response.data)
    })
  },  
  hate(id, callback){
    axios.get("/hate/"+id).then(
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

