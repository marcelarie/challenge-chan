import React, { useState } from 'react'
import './styles.scss'
import SThread from './styled'
import PostMeme from '../post-meme'

const Thread = ({ meme }) => {
    const [showPostComment, setShowPostComment] = useState(false)
    console.log(meme)

    function convertDate(meme) {
        const date = meme.createdAt || null
        if (!date) return date
        const calendar = date.substring(0, 10)
        const time = date.substring(11, 19)
        return 'date ' + calendar + ' at ' + time
    }

    const handleClick = (event) => {
        event.preventDefault()
        setShowPostComment(!showPostComment)
    }

    const memeHeader = `${meme.user ? meme.user.username : 'Anonymous'}, ${meme.name}`

    return (
        <SThread className="thread">
            <div className="thread__image">{meme.imageUrl ? <img src={meme.imageUrl} alt={meme.name} /> : <br />}</div>
            <div className="thread__content">
                <p className="thread__content__header">
                    {memeHeader} <span>{convertDate(meme)}</span>
                </p>
                <div className="thread__content__description">
                    <p>{meme.description}</p>
                </div>
                <button onClick={handleClick} className="thread__content__reply">
                    Reply
                </button>
                {showPostComment && <PostMeme id={meme._id} />}

                <div className="thread__content__comments">{meme.comments && meme.comments.map((comment) =>{ return<Thread meme={comment} />})}</div>
            </div>
        </SThread>
    )
}

export default Thread
