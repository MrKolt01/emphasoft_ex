import React, { useCallback } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import AuthForm from './AuthForm'
import { useDispatch } from 'react-redux'
import { auth } from './authReducer'

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
  const onSubmit = useCallback(
    (formData) => {
      console.log(formData)
      dispatch(auth(formData))
    },
    [dispatch]
  )

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={styles.root}
    >
      <AuthForm onSubmit={onSubmit} />
    </Grid>
  )
}

export default AuthPage
