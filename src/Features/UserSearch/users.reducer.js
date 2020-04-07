const defaultUsers = {
  loading: false,
  searchTerm: null,
  items: {}
}

const usersReducer = (state = defaultUsers, action) => {
  switch (action.type) {
    case 'REQUEST_USERS':
      return {
        ...state,
        loading: true,
        searchTerm: action.userName
      }
    case 'RECEIVE_USERS':
      return {
        ...state,
        loading: false,
        items: action.users,
      }
    case 'MAP_REPOS_TO_USER':
      const { userName, repos } = action
      const newState = { ...state }
      newState.items[userName].repos = repos
      return newState

    default:
      return state
  }
}

export default usersReducer