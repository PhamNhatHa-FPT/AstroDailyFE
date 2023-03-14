import { combineReducers } from "redux";
import { modalReducer } from "./modal.reducer";
import userReducer from "./user.reducer";
const rootReducer = combineReducers({
  modal: modalReducer,
  user: userReducer,
});

export default rootReducer;
