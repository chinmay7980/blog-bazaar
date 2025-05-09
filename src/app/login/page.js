"use client"
import './page.css';
import { useState } from 'react';

export default function Login(){
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    function handle(e){
        e.preventDefault()
        console.log("Email:",email,"Password:",password)
        setemail("")
        setpassword("")
    }
    return (
        <div className='container'>
            <form className='form'>
                <h1 className='title'>LOGIN</h1>

                <div className='group'>
                    <label>Email:</label>
                    <input 
                        type='email'
                        id='email'
                        placeholder="Your Email"
                        value={email}
                        onChange={(e)=>setemail(e.target.value)}
                        required
                    />
                </div>

                <div className='group'>
                    <label>Password:</label>
                    <input 
                        type='password'
                        id='password'
                        placeholder="Your Password"
                        value={password}
                        onChange={(e)=>setpassword(e.target.value)}
                        required
                    />
                </div>

                <button type='submit' className='button' onClick={handle}>Sign In</button>
            </form>
        </div>
    )
}


     
    