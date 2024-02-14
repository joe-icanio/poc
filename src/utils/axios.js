import axios from 'axios'

const clientInstance = axios.create({
  baseURL: 'https://mask-api.icaniotech.com',
})

export default clientInstance
