import {SET_USERS, SET_SEARCHED_USER, SET_SEARCH_RESULTS} from './actions';
import {User} from '../types/User';

interface State {
  users: User[];
  searchedUser: string;
  searchResults: User[];
}

const initialState: State = {
  users: [],
  searchedUser: '',
  searchResults: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        searchResults: action.payload, // Initialize search results with all users
      };
    case SET_SEARCHED_USER:
      return {
        ...state,
        searchedUser: action.payload,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
