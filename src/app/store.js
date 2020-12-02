import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { reducer as formReducer } from 'redux-form'
import auth from '../features/auth/authReducer'

const reducer = {
  auth,
  form: formReducer,
}

const middleware = [...getDefaultMiddleware(), logger]

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})
