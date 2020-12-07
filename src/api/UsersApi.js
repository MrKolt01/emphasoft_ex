import { ApiConnect } from './config/ApiConnect'

export const UsersApi = {
  getUsers(token) {
    return ApiConnect.get('/api/v1/users/', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers':
          'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
        Authorization: `Token ${token}`,
      },
    })
  },
}
