import { auth } from '../../../firebase'
import { signUp } from '../../../api/methods/auth'
import { setUser, getUser } from '../../actions/user'
import { AuthTypes } from '../../types/auth'

export const signUpRequest = () => ({
    type: AuthTypes.SIGN_UP_REQUEST,
})

export const signUpSuccess = () => ({ type: AuthTypes.SIGN_UP_SUCCESS })

export const signUpError = (payload) => ({
    type: AuthTypes.SIGN_OUT_ERROR,
    payload,
})

export function signUpWithEmailRequest({ email, password, username }) {
    return async (dispatch) => {
        dispatch(signUpRequest())
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await signUp({ _id: user.uid, email, username })
            dispatch(setUser({ _id: user.uid, email, username }))
            dispatch(signUpSuccess())
        } catch (error) {
            dispatch(signUpError(error.message))
        }
    }
}

export function signInWithEmailRequest({ email, password }) {
    return async (dispatch) => {
        dispatch(signUpRequest())
        try {
            await auth.signInWithEmailAndPassword(email, password)

            const id = auth.currentUser.uid

            const data = await dispatch(getUser(id))
            dispatch(setUser({ email: data.email, username: data.username, _id: data._id }))
            dispatch(signUpSuccess())
        } catch (error) {
            dispatch(signUpError(error.message))
        }
    }
}

export function signOut() {
    return async (dispatch) => {
        dispatch(signOutRequest())
        try {
            auth.signOut()
            dispatch(signOutSuccess())
        } catch (error) {
            dispatch(signOutError(error.message))
        }
    }
}

export const signOutRequest = () => ({
    type: AuthTypes.SIGN_OUT_REQUEST,
})

export const signOutSuccess = () => ({
    type: AuthTypes.SIGN_OUT_SUCCESS,
})

export const signOutError = (payload) => ({
    type: AuthTypes.SIGN_OUT_ERROR,
    payload,
})
