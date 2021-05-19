import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../../redux/actions/auth'

const UserManager = () => {
    const { username } = useSelector(({ user }) => user)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(signOut())
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>{username} </h3>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default UserManager
