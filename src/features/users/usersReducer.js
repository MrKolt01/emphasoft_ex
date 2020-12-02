import { createSlice } from '@reduxjs/toolkit'
import { UsersApi } from '../../api/UsersApi'
import CookieUtils from '../../utils/CookieUtils'

const initialState = {
  users: [],
  isLoading: false,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersRequest(state) {
      state.isLoading = true
    },
    getUsersSuccess(state, { payload }) {
      state.isLoading = false
      state.users = payload
    },
  },
})

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(usersSlice.actions.getUsersRequest())
    const res = await UsersApi.getUsers(CookieUtils.getCookie('token'))
    dispatch(usersSlice.actions.getUsersSuccess(res.data))
  }
}

export default usersSlice.reducer
