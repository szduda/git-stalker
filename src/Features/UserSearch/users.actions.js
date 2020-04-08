import { collapse } from '../UserReposList/repos.actions'

const USERS_PAGE_SIZE = 5
const buildRequest = userName =>
  `https://api.github.com/search/users?q=${userName}&per_page=${USERS_PAGE_SIZE}`

export const REQUEST_USERS = 'REQUEST_USERS'
const requestUsers = userName => ({
  type: REQUEST_USERS,
  userName
})

export const RECEIVE_USERS = 'RECEIVE_USERS'
const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const MAP_REPOS_TO_USER = 'MAP_REPOS_TO_USER'
export const mapRepos = (userName, repos) => ({
  type: MAP_REPOS_TO_USER,
  userName,
  repos
})

export const fetchUsers = userName => async dispatch => {
  dispatch(requestUsers(userName))
  dispatch(collapse)

  const request = buildRequest(userName)
  let result
  try {
    result = await fetch(request)
  } catch (error) {
    console.log('Failed to fetch data because:', error)
  }
  try {
    result = await result.json()
  } catch (error) {
    console.log('Failed to serialize data because:', error)
  }

  let users = parseUsers(result?.items ?? [])
  dispatch(receiveUsers(users))
}

export const parseUsers = items => items.reduce((usersObj, item) => {
  const { login } = item
  usersObj[login] = { name: login, repos: [] }
  return usersObj
}, {})