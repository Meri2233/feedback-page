import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Feedback(props) {
    let { users } = useSelector((state) => state.user);
    return (
        <div className='profile'>
            <h1>Send Feedback to your friends</h1>
            {users.map((user) => {
                if (user !== props.email) {
                    return <Link to={`/feedbackform/:${user}`}><div className='user'>{user}</div></Link>
                }
            })}
        </div>
    )
}
