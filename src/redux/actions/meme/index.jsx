import { MemeTypes } from '../../types/meme'
import { postMemeMethod, getMemesMethod } from '../../../api/methods/meme'
import uploadFile from '../../../services/cloudinary'

export const postMemeRequest = () => ({
    type: MemeTypes.POST_MEME_REQUEST,
})

export const postMemeError = (payload) => ({
    type: MemeTypes.POST_MEME_ERROR,
    payload,
})

export const postMemeSuccess = (payload) => ({
    type: MemeTypes.POST_MEME_SUCCESS,
    payload
})

export function postMeme(body) {
    return async (dispatch) => {
        dispatch(postMemeRequest())
        const { file, ...rest } = body
        const { data } = await uploadFile(file)
        try {
            const result = await postMemeMethod({ ...rest, imageUrl: data.url })
            dispatch(postMemeSuccess(result.data))
        } catch (error) {
            dispatch(postMemeError(error))
        }
    }
}

export const getMemesRequest = () => ({
    type: MemeTypes.GET_MEMES_REQUEST,
})

export const getMemesError = (payload) => ({
    type: MemeTypes.GET_MEMES_ERROR,
    payload,
})

export const getMemesSuccess = (payload) => ({
    type: MemeTypes.GET_MEMES_SUCCESS,
    payload,
})

export function getMemes() {
    return async (dispatch) => {
        dispatch(getMemesRequest())

        const { data } = await getMemesMethod()
        dispatch(getMemesSuccess(data))
        try {
        } catch (error) {
            dispatch(getMemesError(error))
        }
    }
}
