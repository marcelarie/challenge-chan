import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postMeme } from '../../../redux/actions/meme'
import './styles.scss'

const PostMeme = () => {
    const dispatch = useDispatch()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const topicRef = useRef()

    const extractValue = (ref) => ref.current.value
    const { _id } = useSelector(({ user }) => user)

    const [file, setFile] = useState('')

    const handleFileChange = (event) => {
        event.preventDefault()
        setFile(event.target.files[0])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(
            postMeme({
                file,
                name: extractValue(titleRef),
                user: _id,
                description: extractValue(descriptionRef),
                topic: extractValue(topicRef),
            })
        )
    }

    return (
        <div className="post-meme">
            <h1>post a meme</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="meme-title">Name</label>
                <input type="text" ref={titleRef} />
                <label htmlFor="meme-description">Comment</label>
                <textarea type="text" ref={descriptionRef} />
                <label htmlFor="meme-topic">Topic</label>
                <input type="text" ref={topicRef} />
                <button type="submit">Post</button>
                <input type="file" onChange={handleFileChange} />
            </form>
        </div>
    )
}

export default PostMeme
