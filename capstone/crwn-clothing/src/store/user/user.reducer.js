import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state; // return whatever the original state was cuz the dispatch doesn't correspond to this reducer
  }
};