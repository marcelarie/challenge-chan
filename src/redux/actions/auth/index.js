import { auth } from '../../../firebase'
import { signUp } from '../../../api/methods/auth'
import { setUser } from '../../actions/user'
import { AuthTypes } from '../../types/auth'

export const signUpRequest = () => ({
    type: AuthTypes.SIGN_UP_REQUEST,
})

export const signUpSuccess = () => ({
    type: AuthTypes.SIGN_UP_SUCCESS,
})

export const signUpError = (payload) => ({
    type: AuthTypes.SIGN_OUT_ERROR,
    payload,
})

export function signUpWithEmailRequest({ email, password }) {
    return async (dispatch) => {
        dispatch(signUpRequest())
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await signUp({ _id: user.uid, email })
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

            dispatch(setUser({ email }))
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
