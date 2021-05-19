import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getUserByUsername } from '../../redux/actions/user'
import './styles.scss'

const UserPage = ({ location }) => {
    const dispatch = useDispatch()
    const params = useParams()
    const { otherUser } = useSelector(({ user }) => user)

    useEffect(() => {
        dispatch(getUserByUsername(params.username))
    }, [dispatch, location])
    return (
        <div className="user">
            <h1>Welcome to my page</h1>
            <h1>{otherUser.username}</h1>
            <h1>{otherUser.email}</h1>
        </div>
    )
}

export default UserPage
