import React from 'react'

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
