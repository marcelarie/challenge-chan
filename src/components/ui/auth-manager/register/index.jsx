import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { signUpWithEmailRequest } from '../../../../redux/actions/auth'

const Register = () => {
        const dispatch = useDispatch()
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(
            signUpWithEmailRequest({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
        )
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" ref={emailRef} />
                <label htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Register
