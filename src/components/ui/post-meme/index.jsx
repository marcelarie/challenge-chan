import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postMeme } from '../../../redux/actions/meme'
import './styles.scss'

const PostMeme = ({ id }) => {
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
        const body = !id
            ? {
                  file,
                  name: extractValue(titleRef),
                  user: _id,
                  description: extractValue(descriptionRef),
                  topic: extractValue(topicRef),
              }
            : {
                  file,
                  user: _id,
                  description: extractValue(descriptionRef),
                  itsComment: true,
                  commentId: id,
              }
        dispatch(postMeme(body))
    }

    return (
        <div className="post-meme">
            {id ? <h4>post a comment</h4> : <h1>post a meme</h1>}

            <form onSubmit={handleSubmit}>
                {!id && (
                    <>
                        <label htmlFor="meme-title">Name</label>
                        <input type="text" required ref={titleRef} />
                    </>
                )}
                <label htmlFor="meme-description">Comment</label>
                <textarea type="text" required ref={descriptionRef} />
                {!id && (
                    <>
                        <label htmlFor="meme-topic">Topic</label>
                        <input type="text" required ref={topicRef} />
                    </>
                )}
                <button type="submit">Post</button>
                <input type="file" required onChange={handleFileChange} />
            </form>
        </div>
    )
}

export default PostMeme
