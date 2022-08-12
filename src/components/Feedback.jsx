import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Feedback() {
    let users = useSelector((state) => state.users.users);
    return (
        <div className='feedback'>
            {users.map(el => <Link to={"/feedback/feedbackform/"}>{el}</Link> )}
        </div>
    )
}
