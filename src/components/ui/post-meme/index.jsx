import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { postMeme } from '../../../redux/actions/meme'

const PostMeme = () => {
    const dispatch = useDispatch()
    const memeTitleRef = useRef()
    const descriptionRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(
            postMeme({
                name: memeTitleRef.current.value,
                description: descriptionRef.current.value,
                topic: 'topic',
                imageUrl: 'url'
            })
        )
    }

    return (
        <div>
            <h1>post a meme</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="meme-title">Title</label>
                <input type="text" ref={memeTitleRef} />
                <label htmlFor="meme-description">Description</label>
                <input type="text" ref={descriptionRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostMeme
