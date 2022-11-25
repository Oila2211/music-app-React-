import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { commonPost } from '../../Utilities';


export default function SingUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const signup = () => {

        let user = {
            username: username,
            password: password
        }

        commonPost('http://localhost:3001/users', user)
            .then(response => {
                if (response.status == true) {
                    alert(response.message)
                    navigate('/login')
                } else {
                    alert(response.message)
                }
            })


    }

    return (
        <div className='login-container'>
            <div className='login-form'>
                <h1>Register here!</h1>
                <div>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className='username'
                        placeholder='create username' />

                </div>
                <div>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className='password'
                        placeholder='create password' />
                </div>
                <div>
                    <button onClick={signup} className='login-button'>SingUp</button>
                </div>

            </div>
        </div>
    )
}
