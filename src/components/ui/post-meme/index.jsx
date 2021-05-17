import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { postMeme } from '../../../redux/actions/meme'

const PostMeme = () => {
    const dispatch = useDispatch()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const topicRef = useRef()

    const extractValue = (ref) => ref.current.value

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
                description: extractValue(descriptionRef),
                topic: extractValue(topicRef),
            })
        )
    }

    return (
        <div>
            <h1>post a meme</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <label htmlFor="meme-title">title</label>
                <input type="text" ref={titleRef} />
                <label htmlFor="meme-description">Description</label>
                <input type="text" ref={descriptionRef} />
                <label htmlFor="meme-topic">Topic</label>
                <input type="text" ref={topicRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostMeme
