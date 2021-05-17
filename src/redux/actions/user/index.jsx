import UserTypes from '../../types/user'

export const setUser = (payload) => ({
    type: UserTypes.SET_USER,
    payload,
})
