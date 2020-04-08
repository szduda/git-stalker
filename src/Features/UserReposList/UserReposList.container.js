import { connect } from 'react-redux'

import UserList from '../../Components/UserList'
import { fetchRepos, collapse } from './repos.actions'
import { selectUsers } from '../UserSearch/users.selectors'
import { selectUserRepos } from './repos.selectors'

export default connect(
  state => ({
    searchTerm: state.users.searchTerm,
    expandedUserName: state.repos.expandedUserName,
    users: selectUsers(state.users.items),
    repos: selectUserRepos(state),
    loadingUsers: state.users.loading,
    loadingRepos: state.repos.loading
  }),
  dispatch => ({
    fetchRepos: userName => dispatch(fetchRepos(userName)),
    collapse: () => dispatch(collapse)
  })
)(UserList)