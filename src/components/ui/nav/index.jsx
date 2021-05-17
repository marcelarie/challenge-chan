import React from 'react'
import { NavLink } from 'react-router-dom'
import { HOME } from '../../../routes'

import ThemeToggle from '../theme-toggle'
import SNav from './styled'

const Nav = () => {
    return (
        <SNav>
            <h1>arie</h1>
            <NavLink to={HOME}>
                <button>main</button>
            </NavLink>
            <ThemeToggle />
        </SNav>
    )
}

export default Nav
