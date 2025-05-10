import axios from '@/utils/axios'

export function addCart(params:string) {
  return axios.post('/shop-cart', params);
}

export function modifyCart(params:string) {
  return axios.put('/shop-cart', params);
}

export function getCart(params:string|null) {
  return axios.get('/shop-cart', { params });
}

export function deleteCartItem(id:string) {
  return axios.delete(`/shop-cart/${id}`);
}

export function getByCartItemIds(params:string) {
  return axios.get('/shop-cart/settle', { params });
}