import { ApiConnect } from './config/ApiConnect'

export const UsersApi = {
  getUsers(token) {
    return ApiConnect.get('/api/v1/users/', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        Authorization: `Token ${token}`,
      },
    })
  },
}
