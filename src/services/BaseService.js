import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3002/api',
  withCredentials: false
})

http.interceptors.response.use((response) => response.data);

export default http