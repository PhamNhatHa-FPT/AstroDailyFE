import React, { useState } from "react";
import { auth, db } from "../configs/firebase.configs";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  
} from "firebase/auth";
import { useHistory } from "react-router-dom";
import AppButton from "../common/button";
import AppInput from "../common/input";
import TextInner from "../components/textInner";
import { useAuthValue } from "./AuthContext";
import { v4 as uuidv4 } from "uuid"; 
import { addDoc, collection } from "firebase/firestore";
function SignUp() {
  let history = useHistory();
   const [formData, setFormData] = useState({
     email: "",
     username: "",
     firstName: "",
     lastName: "",
     phone: "",
     date: "",
     birthTime: "",
     password: "",
     confirmPassword: "",
     roleID:1,
     status:true,
   });
  function handleChange(key) {
    return (evt) => {
      setFormData({
        ...formData,
        [key]: evt.target.value,
      });
    };
  }
  const [error, setError] = useState("");
  const { setTimeActive } = useAuthValue();

 const validatePassword = () => {
   let isValid = true;
   if (formData.password !== "" && formData.confirmPassword !== "") {
     if (formData.password !== formData.confirmPassword) {
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
    const Datet = "21/04/2000";

    const arr = Datet.split("/");

    console.log(arr);
  const register = (e) => {
    e.preventDefault();
    setError("");
    const ref = collection(db, "/user");
    const arr = formData.date.split("-");
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              addDoc(ref, {
                id: auth.currentUser.uid,
                email: formData.email,
                username: formData.username,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phone: formData.phone,
                dobDay: arr[1],
                dobMonth: arr[2],
                dobYear: arr[0],
                birthTime: formData.birthTime,
                password: formData.password,
                roleID: 1,
                status: true,
              });
              setTimeActive(true);
              history.push("/verify-email");
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }
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
                      value={formData.email}
                      onChange={handleChange("email")}
                    />
                    <AppInput
                      type="text"
                      children="Username"
                      value={formData.username}
                      onChange={handleChange("username")}
                    />
                    <div style={{ display: "flex" }}>
                      <AppInput
                        style={{ width: "50%" }}
                        type="text"
                        children="FirstName"
                        value={formData.firstName}
                        onChange={handleChange("firstName")}
                      />
                      <div style={{ padding: "5px" }}></div>
                      <AppInput
                        style={{ width: "50%" }}
                        type="text"
                        children="LastName"
                        value={formData.lastName}
                        onChange={handleChange("lastName")}
                      />
                    </div>
                    <AppInput
                      type="number"
                      children="Phone"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                    />
                    <div style={{ display: "flex" }}>
                      <AppInput
                        style={{ width: "50%" }}
                        type="date"
                        children="Date"
                        value={formData.date}
                        onChange={handleChange("date")}
                      />
                      <div style={{ padding: "5px" }}></div>
                      <AppInput
                        style={{ width: "50%" }}
                        type="time"
                        children="BirthTime"
                        value={formData.birthTime}
                        onChange={handleChange("birthTime")}
                      />
                    </div>
                    <AppInput
                      type="password"
                      children="Password"
                      value={formData.password}
                      onChange={handleChange("password")}
                    />
                    <AppInput
                      type="password"
                      children="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange("confirmPassword")}
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