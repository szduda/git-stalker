import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import ExpandIcon from '../Assets/expand.svg'
import { Row } from './Theme'
import StarIcon from '../Assets/star.svg'
import { LoadingIndicator } from './Theme'

const RepoScore = ({ score }) => (
  <div css={css`
  display: flex; 
  align-items: flex-end;
  align-self: baseline;
  height: 20px;
  `}>
    <h4>
      {score}
    </h4>
    <StarIcon />
  </div>
)

const RepoListItem = ({ repo }) => (
  <li css={css`
    background: #ccc; 
    margin-bottom: 20px; 
    padding: 10px;
  `}>
    <Row>
      <div>
        <h3>{repo.title}</h3>
        <p>{repo.description}</p>
      </div>
      <RepoScore score={repo.score} />
    </Row>
  </li>
)

const ReposList = ({ repos, visible, loading }) => visible
  ? (
    <div css={css`margin-left: 20px;`}>
      <LoadingIndicator visible={loading} />
      {repos && repos.length
        ? (
          <ul>
            {repos.map((repo, index) => (
              <RepoListItem
                repo={repo}
                key={`repo-${index}`}
              />
            ))}
          </ul>
        ) : (
          !loading && <p>This user has no public repositories to show</p>
        )}
    </div>
  ) : null

const UserListItem = ({ user, onToggle, expanded = false }) => (
  <button
    onClick={() => onToggle(user.name)}
    css={css`
      background: #e5e5e5;
    `}>
    <Row>
      <h2>
        {user.name}
      </h2>
      <ExpandIcon css={css`transform: rotate(${expanded ? '180' : '0'}deg);`} />
    </Row>
  </button >
)

export default ({
  users, loadingUsers, searchTerm,
  repos, loadingRepos, expandedUserName,
  fetchRepos, collapse
}) => (
    <div css={css`width: 100%;`}>
      <LoadingIndicator visible={loadingUsers} />
      {!loadingUsers && users && users.length
        ? (<>
          <h1>
            Showing users for "{searchTerm}"
          </h1>
          <ul>
            {users.map((user, index) => {
              const expanded = user.name === expandedUserName
              return (
                <li key={`user-${index}`}>
                  <UserListItem {...{
                    user,
                    expanded,
                    onToggle: userName =>
                      userName === expandedUserName
                        ? collapse()
                        : fetchRepos(userName)
                  }} />
                  <ReposList
                    repos={repos}
                    visible={expanded}
                    loading={loadingRepos}
                  />
                </li>
              )
            })}
          </ul>
        </>) : (
          searchTerm && !loadingUsers && <p>No matching users found</p>
        )}
    </div>
  )