import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:7979/api',
    timeout:10000,
    headers: {'content-Type': 'application/json'},
  });
  // 响应前的拦截
  instance.interceptors.request.use( (req)=>{
      let token = sessionStorage.getItem('token');
      token && (req.headers["token"] =token);
    return req;
  },  (error)=> {
    return Promise.reject(error);
  });
// 响应后的拦截
instance.interceptors.response.use( (res)=> {
res.data.token && sessionStorage.setItem('token',res.data.token)
    return res;
  },(error)=>{
     
     return Promise.reject(error);
  })
  export default instance
