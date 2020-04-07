import { combineReducers } from 'redux'
import users from './Features/UserSearch/users.reducer'
import repos from './Features/UserReposList/repos.reducer'

export default combineReducers({
  users,
  repos,
})




export const mockState = {
  repos: {
    loading: false,
    expandedUserName: 'usero two',
    items: [
      {
        id: 1,
        title: 'some repo',
        description: 'nice and usefull app, you should get it no matter what you want or need',
        score: 42
      },
      {
        id: 2,
        title: 'git-stalker',
        description: 'Stalk Github users and stare at their repos peacefully.',
        score: 5
      },
    ]
  },
  users: {
    loading: false,
    searchTerm: 'usero',
    items: [
      {
        name: 'usero one',
        repos: []
      },
      {
        name: 'usero two',
        repos: [1, 2]
      }
    ]
  }
}