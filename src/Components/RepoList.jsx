import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Row, LoadingIndicator } from './Theme'
import StarIcon from '../Assets/star.svg'
import FetchedListWrapper from './FetchedListWrapper'

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

export default ({ repos, visible, loading }) => (
  <FetchedListWrapper {...{
    visible,
    loading,
    hasData: repos?.length,
    noDataMessage: 'No public repositories found.',
    css: css`margin-left: 20px;`,
    loadingIndicator: <LoadingIndicator />
  }}>
    <ul>
      {repos.map((repo, index) => (
        <RepoListItem
          repo={repo}
          key={`repo-${index}`}
        />
      ))}
    </ul>
  </FetchedListWrapper>
)