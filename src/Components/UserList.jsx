import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ExpandIcon from '../Assets/expand.svg'
import { Row, LoadingIndicator } from './Theme'
import FetchedListWrapper from './FetchedListWrapper'
import RepoList from './RepoList'

const UserListItem = ({ user, onToggle, expanded = false }) => (
  <button
    onClick={() => onToggle(user.name)}
    css={css`background: #e5e5e5;`}
  >
    <Row>
      <h2>{user.name}</h2>
      <ExpandIcon css={css`transform: rotate(${expanded ? '180' : '0'}deg);`} />
    </Row>
  </button>
)

export default ({
  users, loadingUsers, searchTerm,
  repos, loadingRepos, expandedUserName,
  fetchRepos, collapse
}) => (
    <FetchedListWrapper
      visible={!!searchTerm}
      loading={loadingUsers}
      hasData={users?.length}
      noDataMessage="No matching users found."
      css={css`width: 100%`}
      loadingIndicator={<LoadingIndicator />}
    >
      <h1>
        Showing users for "{searchTerm}"
      </h1>
      <ul>
        {users.map((user, index) => {
          const expanded = user.name === expandedUserName
          const onToggle = userName =>
            userName === expandedUserName
              ? collapse()
              : fetchRepos(userName)
          return (
            <li key={`user-${index}`}>
              <UserListItem {...{ user, expanded, onToggle }} />
              <RepoList {...{ repos, visible: expanded, loading: loadingRepos }} />
            </li>
          )
        })}
      </ul>
    </FetchedListWrapper>
  )