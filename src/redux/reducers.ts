import {SET_USERS, SET_SEARCHED_USER} from './actions';

const initialState = {
  users: [],
  searchedUser: '',
};

const userReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_SEARCHED_USER:
      return {
        ...state,
        searchedUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
