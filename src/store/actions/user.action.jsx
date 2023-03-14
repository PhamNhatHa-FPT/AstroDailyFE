import axios from "axios";
import jwt from "jwt-decode";
// import { NotificationManager } from "react-notifications";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SELF_FAILED,
  SELF_SUCCESS,
} from "./../constants/user.const";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = process.env.REACT_APP_API_URL;

export const postUser = (idToken) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${API_URL}/User/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { idToken },
    })
      .then((res) => {
        const user = jwt(res.data)
        console.log("🚀 ~ file: user.action.jsx:26 ~ .then ~ user:", user)
        // localStorage.setItem("token", JSON.stringify(user));
        // dispatch(postLoginSuccess(res.data));
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

export const getSelf = (formData, setFormData, setPlace, setText) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/Horoscope?name=${formData.name}&date=${formData.date}&time=${formData.place_id}&place_id=${formData.place_id}`,
    })
      .then((res) => {
        dispatch(getSelfSuccess(res.data));
        setFormData({
          name: "",
          date: "",
          time: "",
          place_id: 0,
        });
        setPlace(null);
        setText("");
      })
      .catch((err) => {
        dispatch(getSelfFailed(err));
      });
  };
};

export const getSelfSuccess = (self) => {
  return {
    type: SELF_SUCCESS,
    payload: self,
  };
};

const getSelfFailed = (err) => {
  return {
    type: SELF_FAILED,
    payload: err,
  };
};