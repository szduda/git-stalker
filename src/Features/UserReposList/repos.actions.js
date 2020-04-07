import { mapRepos as mapToUser } from '../UserSearch/users.actions'

const buildRequest = userName =>
  `https://api.github.com/users/${userName}/repos`

export const REQUEST_REPOS = 'REQUEST_REPOS'
const requestRepos = userName => ({
  type: REQUEST_REPOS,
  userName
})

export const RECEIVE_REPOS = 'RECEIVE_REPOS'
const receiveRepos = repos => ({
  type: RECEIVE_REPOS,
  repos
})

export const COLLAPSE = 'COLLAPSE'
export const collapse = ({
  type: COLLAPSE
})

export const fetchRepos = userName => async dispatch => {
  dispatch(requestRepos(userName))

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

  const repos = parseRepos(result)

  dispatch(receiveRepos(repos))
  dispatch(mapToUser(userName, Object.keys(repos)))
}

const parseRepos = items => items.reduce((reposObj, item) => {
  const { id, name, description, watchers_count } = item
  reposObj[item['id']] = {
    id,
    title: name,
    description,
    score: watchers_count
  }
  return reposObj
}, {})