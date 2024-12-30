import axios from 'axios'
import { API_URL } from '@/constants'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

// instance.interceptors.request.use((config) => {
//   const token: string | null = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//
//   return config
// }, (error) => {
//   return Promise.reject(error)
// })
//
instance.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  // if (error.response.status === 401) {
  //   window.location.href = '/home'
  // }

  return Promise.reject(error.response.data)
});

export default instance

