import { mapRepos as mapToUser } from '../UserSearch/users.actions'

const buildRequest = userName =>
  `https://api.github.com/users/${userName}/repos`

export const REQUEST_REPOS = 'REQUEST_REPOS'
const requestRepos = userName => ({
  type: REQUEST_REPOS,
  userName
})

export const REQUEST_REPOS_ERROR = 'REQUEST_REPOS_ERROR'
const requestReposError = () => ({
  type: REQUEST_REPOS_ERROR,
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
  console.log(request)
  let response, data
  try {
    response = await fetch(request)
  } catch (error) {
    console.log('Failed to fetch data because:', error)
  }

  if (response.ok) {
    try {
      data = await response.json()
    } catch (error) {
      console.log('Failed to serialize data because:', error)
    }
    const repos = parseRepos(data)

    dispatch(receiveRepos(repos))
    dispatch(mapToUser(userName, Object.keys(repos)))
  }
  else {
    dispatch(requestReposError())
  }
}

export const parseRepos = items => items.reduce((reposObj, item) => {
  const { id, name, description, watchers_count } = item
  reposObj[item['id']] = {
    id,
    title: name,
    description,
    score: watchers_count
  }
  return reposObj
}, {})