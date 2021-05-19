import React from 'react'
import './styles.scss'
import StyledSearchCard from './styled'

const SearchCard = ({ data, type }) => {
    if (type === 'meme') {
        return (
            <StyledSearchCard className="search-card">
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <img src={data.imageUrl} alt={data._id} />
            </StyledSearchCard>
        )
    }
    if (type === 'user') {
        return (
            <StyledSearchCard className="search-card">
                <h3>{data.username}</h3>
                <h3>{data.email}</h3>
            </StyledSearchCard>
        )
    }
    return (
        <StyledSearchCard className="search-card">
            <h1>No results</h1>
        </StyledSearchCard>
    )
}

export default SearchCard
