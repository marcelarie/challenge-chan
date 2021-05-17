import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../../redux/actions/auth'

const UserManager = () => {
    const { email } = useSelector(({ user }) => user)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(signOut())
    }

    return (
        <div>
            <h1>{email}</h1>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default UserManager
