import { UserTypes } from '../../types/user'
import { getUserMethod } from '../../../api/methods/user'

export const setUser = (payload) => ({
    type: UserTypes.SET_USER,
    payload,
})

export const getUser = (id) => {
    return async (dispatch) => {
        dispatch(getUserRequest())
        try {
            const { data } = await getUserMethod(id)

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

export const getUserError = (payload) => ({
    type: UserTypes.GET_USER_ERROR,
    payload,
})
