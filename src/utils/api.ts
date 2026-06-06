import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-storage')
  if (token) {
    const { token: authToken } = JSON.parse(token)
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`
    }
  }
  return config
})

export default apiClient
