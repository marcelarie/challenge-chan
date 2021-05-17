import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HOME } from '../../../routes'
import AuthManager from '../auth-manager'

import ThemeToggle from '../theme-toggle'
import SNav from './styled'

const Nav = () => {
    const [showAuth, setShowAuth] = useState(false)

    const handleAuthToggle = () => {
        setShowAuth(!showAuth)
}

    return (
        <SNav>
            <h1>challenge-chan</h1>
            <NavLink to={HOME}>
                <button>/main</button>
            </NavLink>
            <button onClick={handleAuthToggle}>Login/Sign Up</button>
            <AuthManager show={showAuth} />
            <ThemeToggle />
        </SNav>
    )
}

export default Nav
