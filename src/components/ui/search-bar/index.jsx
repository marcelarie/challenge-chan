import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../../../redux/actions/search'

const SearchBar = () => {
    const dispatch = useDispatch()
    const searchRef = useRef()

    const handleSearchOnClick = () => {
        const params = searchRef.current.value
        dispatch(search(params))
    }

    return (
        <div>
            <input type="text" name="search-bar" ref={searchRef} />
            <button onClick={handleSearchOnClick}>Search</button>
        </div>
    )
}

export default SearchBar
