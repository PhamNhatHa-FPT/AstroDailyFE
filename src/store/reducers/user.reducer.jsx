import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SELF_FAILED,
  SELF_SUCCESS,
  WEATHER_SUCCESS,
  QUOTE_SUCCESS,
  SELF_PLANET_SUCCESS,
  SELF_ZODIAC_SUCCESS,
  SELF_HOUSE_SUCCESS,
} from "../constants/user.const";

const initialState = {
  user: JSON.parse(localStorage.getItem("userObject"))
    ? JSON.parse(localStorage.getItem("userObject"))
    : null,
  self: null,
  weather: [],
  quote: [],
  selfPlanet: [],
  selfZodiac: [],
  selfHouse: [],
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
    case SELF_PLANET_SUCCESS: {
      return { ...state, selfPlanet: payload };
    }
    case SELF_ZODIAC_SUCCESS: {
      return { ...state, selfZodiac: payload };
    }
    case SELF_HOUSE_SUCCESS: {
      return { ...state, selfHouse: payload };
    }
    case SELF_FAILED: {
      return { ...state, errors: payload };
    }
    case QUOTE_SUCCESS: {
      return { ...state, quote: payload };
    }
    case WEATHER_SUCCESS: {
      return { ...state, weather: payload };
    }
    default:
      return state;
  }
};

export default userReducer;
