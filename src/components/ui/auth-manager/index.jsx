import React, { useState } from 'react'
import './styles.scss'
import SAuth from './styled'
import Login from './login'
import Register from './register'

const AuthManager = ({ show }) => {
    const [showLogin, setShowLogin] = useState(true)

    const handleShowLogin = (bool) => setShowLogin(bool)

    if (!show) return null

    return (
        <SAuth className="auth-manager">
            {showLogin && <Login />}
            {!showLogin && <Register />}
            <div className="auth-manager__options">
                <button onClick={() => handleShowLogin(true)}>Login</button>
                <button onClick={() => handleShowLogin(false)}>Register</button>
            </div>
        </SAuth>
    )
}

export default AuthManager
