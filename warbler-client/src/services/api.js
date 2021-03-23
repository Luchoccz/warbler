import axios from "axios";

export function setTokenHeader(token){
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function apiCall(method, path, data){
  axios.defaults.baseURL = "http://localhost:3001/"
  return new Promise ((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
      return resolve(res.data);
    })
      .catch(err => {
        console.log("::::ERROR", JSON.stringify(err))
        return reject(err.message);
    });
  });
}