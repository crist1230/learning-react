import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  const { type, payload } = action;

  switch(type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };

    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };

    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, error: payload };
      
    default:
      return state; // return whatever the original state was cuz the dispatch doesn't correspond to this reducer
  }
};