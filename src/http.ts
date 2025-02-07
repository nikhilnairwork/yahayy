import axios from "axios";
import { getToken } from "./session";




export const http=axios.create({
    baseURL:'https://api.yahayy.com/',
  
});

http.interceptors.request.use(
    function  (config) {
     
      const token = getToken();
   
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // Add a response interceptor
  
  http.interceptors.response.use(
    function (response) {
      return response;
    },
  
    function (error) {
     
      if (error.response.status === 403) {
        
  
        
      }
      if (error.response) {
        if (401 === error.response.status) {

          
        } else {
          return Promise.reject(error);
        }
      }
    }
  );