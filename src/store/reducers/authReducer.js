import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions/actionTypes";

const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS");
      return { ...state, authError: null };

    case LOGIN_ERROR:
      console.log("LOGIN_ERROR");
      return { ...state, authError: action.error.message };

    case LOGOUT_SUCCESS:
      console.log("LOGOUT_SUCCESS");
      return state;

    case SIGNUP_SUCCESS:
      console.log("SIGNUP_SUCCESS");
      return { ...state, authError: null };

    case SIGNUP_ERROR:
      console.log("SIGNUP_ERROR");
      return { ...state, authError: action.error.message };

    default:
      return state;
  }
};

export default authReducer;
