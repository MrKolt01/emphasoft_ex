import React from 'react'
import { useSelector } from 'react-redux'
import AuthSelector from '../auth/authSelectors'
import { Redirect } from 'react-router-dom'

const UsersPage = () => {
  const isAuth = useSelector(AuthSelector.getIsAuth)
  return <>{isAuth ? <div>users page</div> : <Redirect to={'/'} />}</>
}

export default UsersPage
