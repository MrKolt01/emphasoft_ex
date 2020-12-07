import { ApiConnect } from './config/ApiConnect'

export const AuthApi = {
  auth(user) {
    return ApiConnect.post('/api-token-auth/', user, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers':
          'Access-Control-Allow-Headers,Origin,X-Requested-With,Content-Type,Accept,content-type,application/json,Access-Control-Request-Method,Access-Control-Request-Headers',
      },
    })
  },
}
