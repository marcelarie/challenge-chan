import React from 'react'
import { useSelector } from 'react-redux'
import './styles.scss'
import SearchCard from '../../components/ui/search-card'

const SearchPage = () => {
    const { searchResult } = useSelector(({ search }) => search)
    const noResults = <p>No results</p>
    return (
        <div className="search">
            <div>
                <h3>Memes by Name:</h3>
                {searchResult.memes &&
                    searchResult.memes.memeNameResponse &&
                    searchResult.memes.memeNameResponse.map((meme) => {
                        return <SearchCard key={meme._id} data={meme} type='meme' />
                    })}
                {searchResult.memes.memeNameResponse.length <= 0 && noResults}
                <h3>Memes by Description:</h3>
                {searchResult &&
                    searchResult.memes.memeDescriptionResponse &&
                    searchResult.memes.memeDescriptionResponse.map((meme) => {
                        return <SearchCard key={meme._id} data={meme} type='meme' />
                    })}
                {searchResult.memes.memeDescriptionResponse.length <= 0 && noResults}
            </div>
            <div>
                <h3>Users by Username:</h3>
                {searchResult.users &&
                    searchResult.users.usernameResponse &&
                    searchResult.users.usernameResponse.map((user) => {
                        return <SearchCard key={user._id} data={user} type='user' />
                    })}
                {searchResult.users.usernameResponse.length <= 0 && noResults}
                <h3>Users by Email:</h3>
                {searchResult.users &&
                    searchResult.users.emailResponse &&
                    searchResult.users.emailResponse.map((user) => {
                        return <SearchCard key={user._id} data={user} type='user' />
                    })}
                {searchResult.users.emailResponse.length <= 0 && noResults}
            </div>
        </div>
    )
}

export default SearchPage
