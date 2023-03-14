import axios from "axios";
// import { NotificationManager } from "react-notifications";
import { LOGIN_FAILED, LOGIN_SUCCESS } from './../constants/user.const';

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "https://localhost:5001/api";

export const postUser = ({formData}) => {
  const userLogin = localStorage.getItem("userLogin");
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${API_URL}/Planet`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { formData },
    })
      .then((res) => {
        dispatch(postLoginSuccess(res.data));
      })
      .catch((err) => {
        dispatch(postLoginFailed(err));
      });
  };
};

export const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};