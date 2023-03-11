import React, { useState } from "react";
import { auth } from "../configs/firebase.configs";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AppButton from "../common/button";
import AppInput from "../common/input";
import TextInner from "../components/textInner";

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRe, setPasswordRe] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
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
                <div className="et_pb_contact">
                  <form
                    className="et_pb_contact_form clearfix"
                    onSubmit={signUp}
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
                      value={passwordRe}
                      onChange={(e) => setPasswordRe(e.target.value)}
                    />
                    <div className="et_contact_bottom_container">
                      <AppButton
                        type="submit"
                        children="Register"
                        btnType="button_1"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default SignUp