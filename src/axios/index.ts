import axios from 'axios'
import GetTokenResponse from '../models/response/GetTokenResponse'

export const API_URL = `http://localhost:5000/api`

const api = axios.create({
  baseURL: API_URL
})

const REGISTER_URL = '/users/register'
const LOGIN_URL = '/users/login'
const CHECK_AUTH_URL = '/users/check-auth'

api.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  
  if(config.url !== REGISTER_URL && config.url !== LOGIN_URL && config.url !== CHECK_AUTH_URL) {
    const tokenResponse = await axios.get<GetTokenResponse>(`${API_URL}/tokens`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    localStorage.setItem('token', tokenResponse.data.token)
  }
  return config
}, (error) => {
  console.log('Non authorized!');
  throw error
})

export default api