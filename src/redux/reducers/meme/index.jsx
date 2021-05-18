import { MemeTypes } from '../../types/meme'

const initialState = {
    meme: null,
    error: null,
    loading: null,

    memes: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case MemeTypes.POST_MEME_REQUEST:
            return { ...state, loading: true }
        case MemeTypes.POST_MEME_SUCCESS:
            return { ...state, meme: payload, loading: false, error: false }
        case MemeTypes.POST_MEME_ERROR:
            return { ...state, error: true, loading: false }
        case MemeTypes.GET_MEMES_REQUEST:
            return { ...state, loading: true }
        case MemeTypes.GET_MEMES_SUCCESS:
            return { ...state, memes: payload, loading: false, error: false }
        case MemeTypes.GET_MEMES_REQUEST:
            return { ...state, error: true, loading: false }
        default:
            return state
    }
}
