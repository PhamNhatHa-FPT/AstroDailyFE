import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../configs/firebase.configs";
import { getUserDoc } from "../connectFirestore/GetUser";
import AppButton from "../common/button";

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);
    console.log("🚀 ~ file: AuthDetails.jsx:9 ~ AuthDetails ~ authUser:", authUser)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
            })
            .catch((error) => console.log(error));
    };
    var role = null;
    if (authUser != null) {
        getUserDoc(authUser.uid, (userData) => {
            console.log("🚀 ~ file: AuthDetails.jsx:34 ", userData)
            sessionStorage.setItem("userObject", JSON.stringify(userData));
        })
        // Store the object in session storage
        const userData = JSON.parse(sessionStorage.getItem("userObject"));
        // role = userData.userRole;
    }

    return (
      <div className="et_contact_bottom_container">
        {authUser ? (
          <>{/* <p>{`Signed In as ${authUser.email} ${role}`}</p> */}</>
        ) : (
          <AppButton
            children="logout"
            btnType="button_2"
            htmlType="a"
            onClick={userSignOut}
          />
        )}
      </div>
    );
}

export default AuthDetails