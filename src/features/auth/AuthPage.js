import React, { useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import AuthForm from './AuthForm'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './authReducer'
import AuthSelector from './authSelector'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: '#121212',
  },
})

const AuthPage = () => {
  const styles = useStyles()

  const dispatch = useDispatch()
  const isLoading = useSelector(AuthSelector.getIsLoading)
  const onSubmit = useCallback(
    (formData) => {
      if (!isLoading) {
        dispatch(auth(formData))
      }
    },
    [dispatch, isLoading]
  )
  const isAuth = useSelector(AuthSelector.getIsAuth)

  return (
    <>
      {isAuth ? (
        <Redirect to="/users" />
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={styles.root}
        >
          <AuthForm onSubmit={onSubmit} />
        </Grid>
      )}
    </>
  )
}

export default AuthPage
