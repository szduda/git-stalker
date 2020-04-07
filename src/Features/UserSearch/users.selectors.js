export const selectUsers = usersObj => {
  return Object.keys(usersObj)
    .map(userName => usersObj[userName]);
};