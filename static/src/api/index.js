
import axios from 'axios'


axios.defaults.baseURL = 'http://wb.readfollow.com';
// axios.defaults.baseURL = '/';

export default {
  getJsSDK(url,callback){
    axios.get("/jssdk").then(
        (response) => {
        callback(null, response.data)
    })
  },
}

