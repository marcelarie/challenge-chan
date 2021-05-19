import { SearchTypes } from '../../types/search'

const initialState = {
    searchResult: [],
    loading: false,
    error: false,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SearchTypes.SEARCH_REQUEST:
            return { ...state, loading: true }
        case SearchTypes.SEARCH_ERROR:
            return { ...state, error: payload }
        case SearchTypes.SEARCH_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                searchResult: payload,
            }
        default:
            return state
    }
}
