import React, { useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// import AuthDetails from "./AuthDetails";
import { auth } from "../configs/firebase.configs";
import AppInput from "../common/input";
import AppButton from "../common/button";
import TextInner from "../components/textInner";
import { FaGoogle } from "react-icons/fa";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postLoginSuccess, postUser } from "../store/actions/user.action";
import { getUserDoc } from "../connectFirestore/GetUser";
function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(postUser(userCredential.user.accessToken));
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setAuthUser(currentUser);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
    // eslint-disable-next-line
  }, []);
  if (authUser !== null) {
    getUserDoc(authUser.uid, (userData) => {
      dispatch(postLoginSuccess(userData));
      localStorage.setItem("userObject", JSON.stringify(userData));
    });
  }
  return (
    <div className="et_builder_inner_content et_pb_gutters3">
      <TextInner child="Login" htmlType="h1" />
      <div className="et_pb_section et_pb_section_1 et_section_regular">
        <div
          className="et_pb_row et_pb_row_1"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="et_pb_column et_pb_column_1_2 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child">
            <div
              id="et_pb_contact_form_0"
              className="et_pb_module et_pb_contact_form_0 et_pb_contact_form_container clearfix"
            >
              <div className="et_pb_contact">
                <form className="et_pb_contact_form clearfix" onSubmit={login}>
                  <AppInput
                    type="email"
                    children="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <AppInput
                    type="password"
                    children="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="et_contact_bottom_container">
                    <AppButton
                      type="submit"
                      children="login"
                      btnType="button_1"
                      // htmlType="a"
                    />
                  </div>
                  {/* <AuthDetails /> */}
                </form>
                <AppButton
                  children="Login"
                  btnType="button_2"
                  Icon={FaGoogle}
                  htmlType="a"
                  onClick={googleSignIn}
                />
                <AppButton
                  children="Register"
                  btnType="button_2"
                  htmlType="link"
                  url="/register"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
