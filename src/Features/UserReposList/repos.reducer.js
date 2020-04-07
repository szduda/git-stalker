const defaultRepos = {
  loading: false,
  expandedUserName: null,
  items: {}
}

const reposReducer = (state = defaultRepos, action) => {
  switch (action.type) {
    case 'REQUEST_REPOS':
      return action.userName === state.expandedUserName
        ? {
          ...state,
          loading: false,
          expandedUserName: null,
        }
        : {
          ...state,
          loading: true,
          expandedUserName: action.userName
        }
    case 'RECEIVE_REPOS':
      return {
        ...state,
        loading: false,
        items: action.repos,
      }

    default:
      return state
  }
}

export default reposReducer