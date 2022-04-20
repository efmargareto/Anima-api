import createHttp from './BaseService'

const http = createHttp(false)
export const loginUser = (data) => http.post('/login', data)
export const registerUser = (data) => http.post('/user', data)