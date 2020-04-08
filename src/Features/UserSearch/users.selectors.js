export const selectUsers = usersObj => {
  return Object.keys(usersObj)
    .map(key => usersObj[key]);
};