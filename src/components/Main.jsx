import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Intro from './Intro';
import Signup from './Signup';
import Profile from './Profile';
import Feedback from './Feedback';
import Login from './Login';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../firebase.config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from '../slices/userSlice';
import Feedbackform from './Feedbackform';

let users = [];
export default function Main() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [data, setData] = useState(
        {
            name: null,
            email: null
        }
    )

    async function signUpWithEmailAndPassword(username, email, password) {
        if (!users.includes(username)) {
            try {
                await createUserWithEmailAndPassword(auth, email, password, username);
                await addDoc(collection(db, "users"), {
                    username: username,
                    email: email,
                    password: password
                });
                dispatch(addUsers(username));
                navigate("/login", { replace: true });
            } catch (err) {
                console.error(err);
                alert(err.message);
            }
        }
    }
    async function loginWithEmailAndPassword(username, email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password, username);
            let copy = data;
            copy.name = username;
            copy.email = email;
            setData(copy);
            navigate("/profile", { replace: true });
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    return (
        <div className='container'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Intro />} />
                    <Route path="/signup" element={<Signup signUp={signUpWithEmailAndPassword} />} />
                    <Route path="/login" element={<Login login={loginWithEmailAndPassword} />} />
                    <Route path="/profile" element={<Profile username={data.name} email={data.email} />} />
                    <Route path="/feedback" element={<Feedback />}>
                        <Route path="/feedback/feedbackform" element={<Feedbackform/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}
