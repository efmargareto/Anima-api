import createHttp from './BaseService'

const http = createHttp(true)

export const getAllNfts = () => http.get('/nft/all')