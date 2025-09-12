import React from 'react'
import { useState } from 'react';
import useAuth from './Context/useAuth'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();

    const { login } = useAuth();
    const handleSubmit= (e) => {
        e.preventDefault();

        try{
         login(email, password);

        //redirect to dashboard
        Navigate('/')
        }
        catch(err){
            alert(err.message);
        }
    }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" value={email}  placeholder='Email' 
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login