import { UserTypes } from '../../types/user'
import { getUserMethod, getUserByUsernameMethod } from '../../../api/methods/user'

export const setUser = (payload) => ({
    type: UserTypes.SET_USER,
    payload,
})

export const getUser = (id) => {
    return async (dispatch) => {
        dispatch(getUserRequest())
        try {
            const { data } = await getUserMethod(id)
            dispatch(getUserSuccess())
            return data
        } catch (error) {
            dispatch(getUserError())
        }
    }
}

export const getUserByUsername = (username) => {
    return async (dispatch) => {
        dispatch(getUserRequest())
        try {
            const { data } = await getUserByUsernameMethod(username)
            console.log( data)
            dispatch(getUserByUsernameSuccess(data))
            return data
        } catch (error) {
            dispatch(getUserError())
        }
    }
}

export const getUserRequest = () => ({
    type: UserTypes.GET_USER_REQUEST,
})

export const getUserSuccess = () => ({ type: UserTypes.GET_USER_SUCCESS })

export const getUserByUsernameSuccess = (payload) => ({
    type: UserTypes.GET_USER_BY_USERNAME_SUCCESS,
    payload,
})

export const getUserError = (payload) => ({
    type: UserTypes.GET_USER_ERROR,
    payload,
})
