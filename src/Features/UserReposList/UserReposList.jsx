import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Row } from '../Theme'

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
  <li>
    <button
      onClick={() => onToggle(user.name)}
      css={css`
      background: #e5e5e5;
    `}>
      <Row css={css`justify-content: space-between;`}>
        <h2>
          {user.name}
        </h2>
        <h4 css={css`transform: rotate(${expanded ? '180' : '0'}deg);`}>V</h4>
      </Row>
    </button>
    {expanded && <ReposList repos={user.repos} />}
  </li>
)

export default ({ users, heading, expandedUserName, onUserToggle }) => (
  <div>
    <h1>{heading}</h1>
    {users
      ? (
        <ul>
          {users.map((user, index) => (
            <UserListItem
              user={user}
              expanded={user.name === expandedUserName}
              onToggle={onUserToggle}
              key={`user-${index}`}
            />
          ))}
        </ul>
      ) : (
        <p>No matching users found</p>
      )}
  </div>
)