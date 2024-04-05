import { auth, googleProvider } from "../config/firebase-config";
import React from "react";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        console.log(auth?.currentUser?.email)

        const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            //link to the next page
            navigate("/home");
            
        } catch (err) {
            console.error(err);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        //<button className="logOut" onClick={logout}> Logout </button>
        <div className="login-container">
            <button className="signInButton" onClick={signInWithGoogle}> Sign In </button>
        </div>
    );
}
