const defaultRepos = {
  loading: false,
  expandedUserName: null,
  items: {}
}

const reposReducer = (state = defaultRepos, action) => {
  switch (action.type) {
    case 'REQUEST_REPOS':
      return {
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
    case 'COLLAPSE':
      return {
        ...state,
        loading: false,
        expandedUserName: null
      }

    default:
      return state
  }
}

export default reposReducer