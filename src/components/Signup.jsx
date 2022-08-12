import React from 'react'
import { Link } from 'react-router-dom';
export default function Signup({ signUp }) {

    return (
        <div className='signup'>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target[2].value,e.target[3].value)
                if (e.target[2].value === e.target[3].value) {
                    let username = e.target[0].value;
                    let email = e.target[1].value;
                    let password = e.target[2].value;
                    signUp(username, email, password);
                }
            }}>
                <label htmlFor='username'>Username</label><br />
                <input type="text" name='username' id='username' placeholder='John' /><br />
                <label htmlFor='email'>Email</label><br />
                <input type="email" name='email' id='email' placeholder='johnhop23@gmail.com' /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' /><br />
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="password" name='confirmpassword' id='confirmpassword' /><br />
                <button>Signup</button>
            </form>
            <p>Already Signed Up? <Link to={"/login"}>Login</Link>.</p>
        </div>
    )
}
