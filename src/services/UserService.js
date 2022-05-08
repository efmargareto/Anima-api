import createHttp from './BaseService'

const http = createHttp(true)

export const getCurrentUser = () => http.get('/user/me')
export const editUser = (userId, params) => http.post(`/user/editUser/${userId}/${params}`)
export const deleteUser = (userId) => http.post(`/user/deleteUser/${userId}`)
