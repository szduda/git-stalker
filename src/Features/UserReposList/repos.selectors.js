export const selectUserRepos = state => {
  const { items: reposObj, expandedUserName } = state.repos
  const userReposIds = expandedUserName
    ? state.users.items[expandedUserName].repos
    : []
  return Object.keys(reposObj)
    .filter(repoId => userReposIds.includes(repoId))
    .map(repoId => reposObj[repoId]);
};