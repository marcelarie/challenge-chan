import React, { useState } from 'react'
import './styles.scss'
import SThread from './styled'
import PostMeme from '../post-meme'
import { useHistory } from 'react-router'
import { USER_PAGE } from '../../../routes'

const Thread = ({ meme, itsComment }) => {
    const [showPostComment, setShowPostComment] = useState(false)
    const history = useHistory()
    console.log( meme)

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

    const handleUserPageClick = (event) => {
        event.preventDefault()
        history.push(`${USER_PAGE}/${meme.user.username}`)
    }

    const memeHeader = !itsComment ? `${meme.user ? meme.user.username : 'Anonymous'}, ` : `${meme.user ? meme.user.username : 'Anonymous'}`
    return (
        <SThread className="thread">
            <div className="thread__image">
                {meme.imageUrl ? <img src={meme.imageUrl} alt={meme.name} /> : <br />}
                {meme.imageUrl ? <a href={meme.imageUrl}>Link to image</a> : <br />}
            </div>
            <div className="thread__content">
                <p className="thread__content__header">
                    <button type="button" onClick={handleUserPageClick}>
                        {memeHeader}
                    </button>
                    {meme.name}
                    <span>{convertDate(meme)}</span>
                </p>
                <div className="thread__content__description">
                    <p>{meme.description}</p>
                </div>
                {!itsComment && (
                    <button onClick={handleClick} className="thread__content__reply">
                        Reply
                    </button>
                )}
                {showPostComment && <PostMeme key="post-comment" id={meme._id} />}

                <div className="thread__content__comments">
                    {meme.comments &&
                        meme.comments.map((comment) => {
                            return <Thread key={comment.createdAt} meme={comment} itsComment={true} />
                        })}
                </div>
            </div>
        </SThread>
    )
}

export default Thread
