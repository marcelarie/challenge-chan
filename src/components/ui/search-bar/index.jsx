import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { search } from '../../../redux/actions/search'
import { SEARCH_PAGE } from '../../../routes'

const SearchBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const searchRef = useRef()

    const handleSearchOnClick = () => {
        const params = searchRef.current.value
        dispatch(search(params))
        history.push(SEARCH_PAGE)
    }

    return (
        <div>
            <input type="text" name="search-bar" ref={searchRef} />
            <button onClick={handleSearchOnClick}>Search</button>
        </div>
    )
}

export default SearchBar
