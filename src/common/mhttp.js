import axios from 'axios';

class httpService {
  constructor(){
    this.axios = axios.create({
      responseType: "json"
    });

    // 请求拦截
    this.axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      console.log('request');
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // 返回拦截
    this.axios.interceptors.response.use(function (response) {
      // Do something with response data
      console.log('response');
      return response;
    }, function (error) {
      // Do something with response error
      return Promise.reject(error);
    });
  }

  rest(config){
    return new Promise((resolve, reject) => {
      this.axios.request(config).then((response) => {
        if (response.data)
          resolve(response.data);
        else
          reject(response);
      }).catch((error) => {
        if (error.response && error.response.data && error.response.data.error) {
          console.error("REST request error!", error.response.data.error);
          reject(error.response.data.error);
        } else
          reject(error);
      });
    });
  }
}


var httpInstance = new httpService();

export default httpInstance;
