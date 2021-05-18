import { useState } from 'react'
import { useSelector } from 'react-redux'
import PostMeme from '../../components/ui/post-meme'
import './styles.scss'

const Landing = () => {
    const { authenticated } = useSelector(({ auth }) => auth)
    const [showPostMeme, setShowPostMeme] = useState(false)

    const handlePostClick = (event) => {
        event.preventDefault()
        setShowPostMeme(!showPostMeme)
    }

    return (
        <div className="landing">
            <div className="landing__header">
                <h1>welcome to challenge chan</h1>
                {authenticated ? <button onClick={handlePostClick} type="button">
                    [Post A New Meme]
                </button>: <h3>Create a new account to post fresh memes :)</h3> }
                {authenticated && showPostMeme && <PostMeme />}
            </div>
        </div>
    )
}

export default Landing
