const AuthSelector = {
  getIsAuth(state) {
    return state.auth.isAuth
  },
  getIsLoading(state) {
    return state.auth.isLoading
  },
  getErrors(state) {
    return state.auth.errors
  },
}

export default AuthSelector
