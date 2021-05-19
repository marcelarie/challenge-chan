import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { signOut } from '../../../redux/actions/auth'
import { USER_PAGE } from '../../../routes'

const UserManager = () => {
        const history = useHistory()
    const { username } = useSelector(({ user }) => user)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(signOut())
    }

    const handleGoToUserPage = () => {
        const path = `${USER_PAGE}/${username}`
        history.push(path)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>
                <button onClick={handleGoToUserPage}>{username} </button>
            </h3>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default UserManager
