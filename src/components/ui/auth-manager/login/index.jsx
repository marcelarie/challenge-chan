import React, { useRef } from 'react'

const Login = () => {
    const usernameRef = useRef()
    const passwordRef = useRef()
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" ref={usernameRef} />
                <label htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Login
