import axios from 'axios'


axios.defaults.baseURL = "http://localhost:7000";
axios.defaults.timeout = 10000; // 10s
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers={'Access-Control-Allow-Origin': '*'}

const request = (type, path, body) =>
  axios
    .request({ url: path, method: type, data: body })
    .then(response => response.data)
    .catch(error => Promise.reject(error.response.data));

const api ={
    createMovie:(body)=> request('post',`/addMovies`,body),
    getMovies:()=> request('get', '/movies'), 
    login:(body) => request('post',`/users/login`,body),
    search:(title)=>request('get','/search/?titulo='+title),
    signIn:(body)=>request('post','/user',body),
    searchUser:(body)=>request('get','/user',body),
    changePasswordUser:(body)=> request('put','/updatePasswordUser',body)
}

export default api;
