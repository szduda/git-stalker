import React from 'react'
import { AppWrapper } from './Components/Theme'
import UsersSearchBar from './Features/UserSearch/UsersSearchBar.container'
import UserReposList from './Features/UserReposList/UserReposList.container'

export default () => (
  <AppWrapper>
    <UsersSearchBar />
    <UserReposList />
  </AppWrapper>
)