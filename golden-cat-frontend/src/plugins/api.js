import axios from 'axios'

// La URL del backend es configurable mediante la variable de entorno
// VUE_APP_API_URL (ver .env.example). Por defecto apunta al backend local.
const baseURL = process.env.VUE_APP_API_URL || 'http://localhost:8000'

const api = axios.create({ baseURL })

export default api
