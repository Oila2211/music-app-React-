import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { commonGet } from '../../Utilities.js';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const login = () => {


        commonGet(`http://localhost:3001/authenticate/${username}/${password}`)

            .then(response => {
                if (response.status == true) {
                    localStorage.setItem('IAmAuthenticated', 'true')
                    localStorage.setItem('username', username)

                    navigate('/Dashboard')
                } else {
                    localStorage.setItem('IAmAuthenticated', 'false')
                    alert("Invalid")
                }
            })
    }

    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1>Log in!</h1>
                <div>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className='create-username'
                        placeholder='Username' />

                </div>
                <div>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='create-password'
                        placeholder='Password' />
                </div>
                <div>
                    <button onClick={login} className='login-button'>Log In</button>
                </div>
                <div>
                    Don't have an account?
                    <br />
                    <Link to={'/signUp'} style={{ textDecoration: 'none' }}>
                        Register here
                    </Link>
                </div>
            </div>
        </div>
    )
}
