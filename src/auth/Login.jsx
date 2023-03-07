import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { auth } from "../configs/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import BasicButtons from "../common/button/Button";
import AuthDetails from './AuthDetails';

function Login({ title }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = (e) => {
        //to Login
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { console.log(userCredential); })
            .catch((error) => { console.log(error); });
    };
    return (
        <div className="login-container">
            <form onSubmit={login}>
                <h1>Login</h1>
                <TextField
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="standard" />
                <br />
                <BasicButtons type="submit" title={title} />
            </form>
        <AuthDetails title="Logout" />
        </div>
    );
}
export default Login