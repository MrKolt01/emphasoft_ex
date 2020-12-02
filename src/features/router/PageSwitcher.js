import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AuthPage from '../auth/AuthPage'
import UsersPage from '../users/UsersPage'

const PageSwitcher = () => {
  return (
    <Switch>
      <Route path={'/users'}>
        <UsersPage />
      </Route>
      <Route exact path={'/'}>
        <AuthPage />
      </Route>
      <Route path={'/'}>
        <Redirect to={'/'} />
      </Route>
    </Switch>
  )
}

export default PageSwitcher
