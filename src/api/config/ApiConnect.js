import axios from 'axios'

const API_ENDPOINT = 'https://emphasoft-test-assignment.herokuapp.com'

export const ApiConnect = axios.create({
  baseURL: API_ENDPOINT,
})
