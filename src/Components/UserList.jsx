import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Row } from './Theme'

const RepoScore = ({ score }) => (
  <div>
    <h4 css={css`
    border-radius: 20px; 
    border: 1px solid #000; 
    width: 24px; 
    height: 24px; 
    display: flex; 
    justify-content: center;
    `}>
      {score}
    </h4>
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

const ReposList = ({ repos }) => (
  <div css={css`margin-left: 20px;`}>
    {repos
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
        <p>This user has no public repositories to show</p>
      )}
  </div>
)

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
      <h4 css={css`transform: rotate(${expanded ? '180' : '0'}deg);`}>V</h4>
    </Row>
  </button >
)

export default ({ users, repos, searchTerm, expandedUserName, toggleUser }) => (
  <div css={css`width: 100%;`}>
    <h1>
      Showing users for "{searchTerm}"
    </h1>
    {users
      ? (
        <ul>
          {users.map((user, index) => {
            const expanded = user.name === expandedUserName
            return (
              <li key={`user-${index}`}>
                <UserListItem {...{ user, expanded, onToggle: toggleUser }} />
                {expanded && <ReposList {...{ repos }} />}
              </li>
            )
          })}
        </ul>
      ) : (
        <p>No matching users found</p>
      )}
  </div>
)