import { ApiConnect } from './config/ApiConnect'

export const AuthApi = {
  auth(user) {
    return ApiConnect.post('/api-token-auth/', user)
  },
}
