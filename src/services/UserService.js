import http from './BaseService'

export const registerUser = (data) => http.post('/user/create', data)