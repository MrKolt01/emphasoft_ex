import { createSlice } from '@reduxjs/toolkit'
import { UsersApi } from '../../api/UsersApi'
import CookieUtils from '../../utils/CookieUtils'

const initialState = {
  users: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersRequest() {},
  },
})

export const getUsers = () => {
  return async (dispatch) => {
    const res = await UsersApi.getUsers(CookieUtils.getCookie('token'))
    console.log(res)
  }
}

export default usersSlice.reducer
