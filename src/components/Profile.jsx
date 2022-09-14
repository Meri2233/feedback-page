import React from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase.config';
import { useSelector, useDispatch } from 'react-redux';
import { addUsers } from '../slices/userSlice';
import { useEffect } from 'react';
import { addFeedback } from '../slices/feedbackSlice';
import { Link } from 'react-router-dom';

export default function Profile(props) {
    let dispatch = useDispatch();
    const { users } = useSelector(state => state.user)
    const { feedbacks } = useSelector(state => state.feedback)
    //console.log(feedbacks);

    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(collection(db, "users"));
            //const querySnapshot1 = await getDocs(collection(db, "feedback"));
            querySnapshot.forEach((doc) => {
                if (!users.includes(doc.data().email)) {
                    dispatch(addUsers(doc.data().email));
                }
                console.log(doc.data().email);
            });
            /*querySnapshot1.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                dispatch(addFeedback(doc.data()));
            });*/
            const q = query(collection(db, "feedback"), where("receiver", "==", props.email));

            const querySnapshot2 = await getDocs(q);
            querySnapshot2.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                dispatch(addFeedback(doc.data()));
            });
        }
        fetchData()
    })

    return (
        <div className='profile'>
            <div className="userdetail">
                <img src="./spy.png" alt="profile" />
                <p>${props.username}</p>
                <p>${props.email}</p>

            </div>
            <div className="feedbacks"> 
                <h1>Feedbacks to you</h1>
                {feedbacks.length === 0 ? <p>No Feedbacks</p> :
                    feedbacks.map(el => {
                        return <div className='feedback'>
                            <p>{el.feedback}</p>
                        </div>
                    })
                }
            </div>
            <div className="sendfeedback">
                <Link to={'/feedback'}>Send Feedback</Link>
            </div>
        </div >
    )
}
