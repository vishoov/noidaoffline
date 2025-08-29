import React from 'react'
import { useState } from 'react'
import { useAuth } from './context/useAuth'
const Login = () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

        try {
            await login(email, password);
            
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed: " + error.message);
        }
        setEmail('');
        setPassword('');
    }

  return (
    <div className = "flex justify-center flex-col items-center h-screen bg-gray-200">
        LOGIN
    <form onSubmit = {handleSubmit} className='flex flex-col gap-4 mt-4'>
        <input 
        type='email'
        playholder='Email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='Email'
        />
        <input 
        type='password'
        playholder='Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        className='p-2 border border-gray-300 rounded'
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Login</button>
    </form>
    </div>
  )
}

export default Login