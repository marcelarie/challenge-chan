import { auth } from '../../../firebase'
import { signUp } from '../../../api/methods/auth'
import { setUser } from '../../../redux/actions/user'

export function signUpWithEmailRequest({ email, password }) {
    return async (dispatch) => {
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            console.log(user.uid)

            const { data } = await signUp({ _id: user.uid, email })
            console.log(data)
            dispatch(setUser(data))
        } catch (error) {
            // dispatch(signUpError(error.message))
            console.log(error)
        }
    }
}

// export function signInWithEmailRequest(email, password) {
//     return async function loginThunk(dispatch) {
//         dispatch(signUpRequest())
//         try {
//             await auth.singInWithEmailAndPassword(email, password)
//         } catch (error) {
//             dispatch(signUpError(error.message))
//         }
//     }
// }
