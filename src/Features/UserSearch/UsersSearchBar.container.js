import { connect } from 'react-redux'

import { fetchUsers } from './users.actions.js'
import SearchBar from '../../Components/SearchBar'

export default connect(
  null,
  dispatch => ({
    search: term => dispatch(fetchUsers(term))
  })
)(SearchBar)