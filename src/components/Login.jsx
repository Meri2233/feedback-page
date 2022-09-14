import React from 'react'

export default function Login({ login }) {
    return (
        <div className='login'>
            <form onSubmit={(e) => {
                e.preventDefault();
                let username = e.target[0].value; 
                let email = e.target[1].value;
                let password = e.target[2].value;
                login(username, email, password);
            }}>
                <label htmlFor='username'>Username</label><br />
                <input type="text" name='username' id='username' placeholder='John' /><br />
                <label htmlFor='email'>Email</label><br />
                <input type="email" name='email' id='email' placeholder='johnhop23@gmail.com' /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' /><br />
                <button>Login</button>
            </form>
        </div>
    )
}
