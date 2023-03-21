import React, { useState } from "react";
import { auth } from "../configs/firebase.configs";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useHistory } from "react-router-dom";
import AppButton from "../common/button";
import AppInput from "../common/input";
import TextInner from "../components/textInner";
import { useAuthValue } from "./AuthContext";
function SignUp() {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();

 const validatePassword = () => {
   let isValid = true;
   if (password !== "" && confirmPassword !== "") {
     if (password !== confirmPassword) {
       isValid = false;
       setError("Passwords does not match");
     }
   }
   return isValid;
 };
    // const signUp = (e) => {
    //     e.preventDefault();
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             console.log(userCredential);
    //             history.push("/login");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
    
  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              history.push("/verify-email");
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
    return (
      <div className="et_builder_inner_content et_pb_gutters3">
        <TextInner child="Register" htmlType="h1" />
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
                <div className="et_pb_text_inner">
                  <h3
                    style={{
                      color: "rgb(254, 127, 92)",
                      fontFamily: "Philosopher",
                      paddingBottom: "20px",
                    }}
                  >
                    {error && error}
                  </h3>
                </div>

                <div className="et_pb_contact">
                  <form
                    className="et_pb_contact_form clearfix"
                    onSubmit={register}
                  >
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
                    <AppInput
                      type="password"
                      children="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="et_contact_bottom_container">
                      <AppButton
                        type="submit"
                        children="Register"
                        btnType="button_1"
                      />
                    </div>
                  </form>
                  <div style={{ display: "flex", paddingTop: "50px" }}>
                    <AppButton
                      children="Login"
                      btnType="button_2"
                      htmlType="link"
                      url="/login"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default SignUp