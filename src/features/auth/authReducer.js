import { createSlice } from '@reduxjs/toolkit'
import { AuthApi } from '../../api/AuthApi'

const initialState = {
  isAuth: false,
  isLoading: true,
  token: '',
  errors: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest(state) {
      state.isLoading = true
      state.errors = []
    },
    setIsAuth(state, { payload }) {
      state.isLoading = false
      state.isAuth = payload
    },
    authSuccess(state) {
      state.isLoading = false
      state.isAuth = true
    },
    authError(state, { payload }) {
      state.isLoading = false
      state.isAuth = false
      state.errors = payload
    },
  },
})

export const auth = (user) => {
  return async (dispatch) => {
    dispatch(authSlice.actions.authRequest())
    try {
      const res = await AuthApi.auth(user)
      document.cookie =
        encodeURIComponent('token') + '=' + encodeURIComponent(res.data?.token)
      dispatch(authSlice.actions.authSuccess())
    } catch (e) {
      const errors = e.response.data?.non_field_errors
      dispatch(authSlice.actions.authError(errors))
    }
  }
}

export default authSlice.reducer
