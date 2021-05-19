import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { HOME, OTHER_TOPIC } from '../../../routes'
import AuthManager from '../auth-manager'
import UserManager from '../user-manager'

import ThemeToggle from '../theme-toggle'
import SearchBar from '../search-bar'
import SNav from './styled'

const Nav = () => {
    const [showAuth, setShowAuth] = useState(false)
    const { authenticated } = useSelector(({ auth }) => auth)

    const handleAuthToggle = () => {
        setShowAuth(!showAuth)
    }

    return (
        <SNav>
            <h1>challenge-chan</h1>
            <NavLink to={HOME}>
                <button>/main</button>
            </NavLink>
            <NavLink to={OTHER_TOPIC}>
                <button>/other-topic</button>
            </NavLink>
            <SearchBar />
            {!authenticated && <button onClick={handleAuthToggle}>Login/Sign Up</button>}
            {!authenticated ? <AuthManager show={showAuth} /> : <UserManager />}
            <ThemeToggle />
        </SNav>
    )
}

export default Nav
