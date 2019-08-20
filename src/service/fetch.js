import axios from 'axios';
// import { cookie } from '../utils/util'
console.log( process.env.REACT_APP_API_ROOT );

const service = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT ,
  timeout: 60000,
});
// request拦截器
service.interceptors.request.use(
  (config) => {
    // 带上cookie
    // const cookieVal = cookie('csrftoken');
    // console.log('cookie' , cookieVal);
    
    // if (cookieVal) {
    //   config.headers['X-CSRF-Token'] = cookieVal;
    //   // csrfToken
    // }
    // 带上用户登录后的token
    const eleToken = window.localStorage.getItem('ele_admin_token');
    if ( eleToken ) {
      config.headers.Authorization = `Bearer ${eleToken}`;
    }
    return config;
  },
  (error) => {
    // 错误处理代码
    return Promise.reject(error);
  },
);

// response拦截器
service.interceptors.response.use(
  (response) => {
    // 数据响应之后，要做的业务
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);


export default service;
