import { Link } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'

export default function RegisterPage() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isPasswordVisible , setIsPasswordVisible ] = useState(false);
    async function registerUser(e){
        e.preventDefault();
        try{
            await axios.post('/register', {name, email, password});
            alert('User created successfully!');
        }
        catch(e){
            alert(' Error registering. Email already in use.');
        }
    }
    return (
    <div className='mx-10 mt-4 grow flex items-center justify-around'>
        <div className='my-32'>
            <h1 className='mb-4 text-4xl text-center'>Register</h1>
            <form className='max-w-md mx-auto' 
            onSubmit={registerUser}>
                <input type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                <input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"/>
                <input className="-mb-4" 
                    name="password" 
                    type={isPasswordVisible? 'text': 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"/>
    <span className="float-right relative -top-9 right-2 m-0" onClick={()=> setIsPasswordVisible(!isPasswordVisible)}>{isPasswordVisible?
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>
    }</span>
                <button className='primary'>Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already have an account?&nbsp;
                    <Link to={'/login'} className='underline text-black'>Log in</Link>
                </div>
            </form>
        </div>
    </div>
    )
}