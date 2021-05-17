import { MemeTypes } from '../../types/meme'
import { postMeme as post } from '../../../api/methods/meme'

export const postMemeRequest = () => ({
    type: MemeTypes.POST_MEME_REQUEST,
})

export const postMemeError = (payload) => ({
    type: MemeTypes.POST_MEME_ERROR,
    payload,
})

export const postMemeSuccess = () => ({
    type: MemeTypes.POST_MEME_SUCCESS,
})

export function postMeme(body) {
    return async (dispatch) => {
        dispatch(postMemeRequest())
        try {
            const result = await post(body)
            dispatch(postMemeSuccess())
        } catch (error) {
            dispatch(postMemeError(error))
        }
    }
}
