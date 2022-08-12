import React, { useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from '../firebase.config';

export default function Profile(props) {

    async function fetchData() {
        const querySnapshot = await getDocs(collection(db, "users"));
        const querySnapshot1 = await getDocs(collection(db, "feedback"));
        querySnapshot.forEach((doc) => {
            //console.log(doc.data().username);
        });
        querySnapshot1.forEach((doc) => {
           // console.log(`${doc.id} => ${doc.data()}`);
        });
    }
    fetchData()

    return (
        <div className='profile'>
            <div className="userdetail">
                <img src="./spy.png" alt="profile" />
                <p>${props.username}</p>
                <p>${props.email}</p>
            </div>
        </div>
    )
}
