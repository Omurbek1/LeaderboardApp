import {User} from '../types/User';

export const SET_USERS = 'SET_USERS';
export const SET_SEARCHED_USER = 'SET_SEARCHED_USER';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const setUsers = (users: User[]) => ({
  type: SET_USERS,
  payload: users,
});

export const setSearchedUser = (username: string) => ({
  type: SET_SEARCHED_USER,
  payload: username,
});

export const setSearchResults = (results: User[]) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});
