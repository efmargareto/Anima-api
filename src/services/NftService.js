import createHttp from './BaseService'

const http = createHttp(true)

export const getAllNfts = () => http.get('/nft/all')
export const getFilterNfts = data => http.get(`/nft/filters${data}`)
export const getSubFilters = key => http.get(`/nft/subfilters`)