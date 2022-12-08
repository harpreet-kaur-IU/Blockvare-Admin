import React, { useState } from 'react'
import styles from './css/Login.module.css'
const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value)
    }

    const formSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div className={`d-flex d-align-center d-justify-center ${styles["wrapper"]}`}>
        <div className={`${styles["login-card"]}`}>
            <h2 className='f-400 l-32 text-black'>Welcome Back</h2>
            <form onSubmit={formSubmit}>
                <div className='d-flex d-flex-column gap-1 mt-8'>
                    <label className='h4 f-600 l-22 text-black'>Email or Username</label>
                    <input className={`h4 f-500 l-22 p-4 ${styles["input"]}`} value={email} onChange={emailHandler} type="email" placeholder='Enter your email or username'></input>
                </div>
                <div className='d-flex d-flex-column gap-1 mt-8'>
                    <label className='h4 f-600 l-22 text-black'>Password</label>
                    <input className={`h4 f-500 l-22 p-4 ${styles["input"]}`} value={password} onChange={passwordHandler} type="password" placeholder='Enter your password'></input>
                </div>
                <button className={`col-12 mt-8 text-white h4 f-600 l-22 ${styles["login-btn"]}`}>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login