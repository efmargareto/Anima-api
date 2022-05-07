import createHttp from './BaseService'

const http = createHttp(true)

export const getAllNfts = () => http.get('/nft/all')
export const getFilterNfts = data => http.get(`/nft/filters${data}`)
export const getSubFilters = key => http.get(`/nft/subfilters`)


// Likes
export const likeNft = (nftId, userId) => http.post(`/nft/like/?nftId=${nftId}&userId=${userId}`)
export const getNftLiked = (userId) => http.get(`/user/likes/${userId}`)
