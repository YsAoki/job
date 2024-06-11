import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://node-job-posting.vercel.app/api/v1',
  withCredentials: true,
})

export default httpClient
