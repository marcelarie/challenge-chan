import { SearchTypes } from '../../types/search'
import { searchByParams } from '../../../api/methods/search'

export const searchRequest = () => ({
    type: SearchTypes.SEARCH_REQUEST,
})

export const searchError = (payload) => ({
    type: SearchTypes.SEARCH_ERROR,
    payload,
})

export const searchSuccess = (payload) => ({
    type: SearchTypes.SEARCH_SUCCESS,
    payload,
})

export const search = (params) => {
    return async (dispatch) => {
        dispatch(searchRequest())

        try {
            const { data } = await searchByParams(params)
            dispatch(searchSuccess(data))
        } catch (error) {
            dispatch(searchError(error))
        }
    }
}
