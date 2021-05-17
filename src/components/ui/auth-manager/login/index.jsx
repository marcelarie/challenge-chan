import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { signInWithEmailRequest } from '../../../../redux/actions/auth'

const Login = () => {
    const dispatch = useDispatch()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(
            signInWithEmailRequest({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
        )
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Email</label>
                <input type="text" ref={emailRef} />
                <label htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Login
