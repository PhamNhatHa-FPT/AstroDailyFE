import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SELF_FAILED,
  SELF_SUCCESS,
} from "../constants/user.const";

const initialState = {
  user: JSON.parse(localStorage.getItem("userObject"))
    ? JSON.parse(localStorage.getItem("userObject"))
    : null,
  self: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return { ...state, user: payload };
    }
    case LOGIN_FAILED: {
      return { ...state, errors: payload };
    }
    case SELF_SUCCESS: {
      return { ...state, self: payload };
    }
    case SELF_FAILED: {
      return { ...state, errors: payload };
    }
    default:
      return state;
  }
};

export default userReducer;
