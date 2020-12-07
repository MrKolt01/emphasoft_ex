import { ApiConnect } from './config/ApiConnect'

export const UsersApi = {
  getUsers(token) {
    return ApiConnect.get('/api/v1/users/', {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
  },
}
