import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { reducer as formReducer } from 'redux-form'
import auth from '../features/auth/authReducer'
import users from '../features/users/usersReducer'

const reducer = {
  auth,
  users,
  form: formReducer,
}

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})
