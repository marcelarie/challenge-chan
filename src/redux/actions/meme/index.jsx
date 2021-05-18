import { MemeTypes } from '../../types/meme'
import { postMeme as post } from '../../../api/methods/meme'
import uploadFile from '../../../services/cloudinary'

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
        const { file, ...rest } = body
        const { data } = await uploadFile(file)
        try {
            await post({ ...rest, imageUrl: data.url })
            dispatch(postMemeSuccess())
        } catch (error) {
            dispatch(postMemeError(error))
        }
    }
}
