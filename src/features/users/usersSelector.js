const UsersSelector = {
  getUsers(state) {
    return state.users.users
  },
  getIsLoading(state) {
    return state.users.isLoading
  },
}

export default UsersSelector
