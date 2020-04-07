import { connect } from 'react-redux'

import UserList from '../../Components/UserList'
import { fetchRepos } from './repos.actions'
import { selectUsers } from '../UserSearch/users.selectors'
import { selectUserRepos } from './repos.selectors'

export default connect(
  state => ({
    searchTerm: state.users.searchTerm,
    expandedUserName: state.repos.expandedUserName,
    users: selectUsers(state.users.items),
    repos: selectUserRepos(state)
  }),
  dispatch => ({
    toggleUser: userName => dispatch(fetchRepos(userName))
  })
)(UserList)