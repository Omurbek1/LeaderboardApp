export const SET_USERS = 'SET_USERS';
export const SET_SEARCHED_USER = 'SET_SEARCHED_USER';

export const setUsers = (users: any) => ({
  type: SET_USERS,
  payload: users,
});

export const setSearchedUser = (username: any) => ({
  type: SET_SEARCHED_USER,
  payload: username,
});
