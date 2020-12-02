import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthSelector from '../auth/authSelectors'
import { Redirect } from 'react-router-dom'
import { getUsers } from './usersReducer'

const UsersPage = () => {
  const isAuth = useSelector(AuthSelector.getIsAuth)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return <>{isAuth ? <div>users page</div> : <Redirect to={'/'} />}</>
}

export default UsersPage
