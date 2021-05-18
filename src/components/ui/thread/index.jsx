import React from 'react'
import './styles.scss'

const Thread = ({ meme }) => {
    console.log(meme)

    const memeHeader = `${meme.user}, ${meme.name}`
    return (
        <div className="thread">
            <div className="thread__image">{meme.imageUrl && <img src={meme.imageUrl} alt="meme-image" />}</div>
            <div className="thread__content">
                <p>{memeHeader}</p>
                <p>{meme.description}</p>
            </div>
        </div>
    )
}

export default Thread
