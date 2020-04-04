import React from 'react'
import { AppWrapper } from './Features/Theme'
import SearchBar from './Features/SearchBar/SearchBar'
import UserReposList from './Features/UserReposList/UserReposList'

const mockState = {
  searchTerm: 'usero',
  expandedUserName: 'usero two',
  users: [
    {
      name: 'usero one',
      repos: null
    },
    {
      name: 'usero two',
      repos: [
        {
          title: 'some repo',
          description: 'nice and usefull app, you should get it no matter what you want or need',
          score: 42
        },
        {
          title: 'git-stalker',
          description: 'Stalk Github users and stare at their repos peacefully.',
          score: 5
        },
      ]
    }
  ]
}

export default () => (
  <AppWrapper>
    <SearchBar />
    <UserReposList
      users={mockState.users}
      heading={`Showing users for "${mockState.searchTerm}"`}
      expandedUserName={mockState.expandedUserName}
    />
  </AppWrapper>
)