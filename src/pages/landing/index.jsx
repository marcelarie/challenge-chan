import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostMeme from '../../components/ui/post-meme'
import Thread from '../../components/ui/thread'
import { getMemes } from '../../redux/actions/meme'
import './styles.scss'

const Landing = () => {
    const dispatch = useDispatch()
    const { authenticated } = useSelector(({ auth }) => auth)
    const [showPostMeme, setShowPostMeme] = useState(false)

    const { memes, meme } = useSelector(({ meme }) => meme)

    const handlePostClick = (event) => {
        event.preventDefault()
        setShowPostMeme(!showPostMeme)
    }

    useEffect(() => {
        dispatch(getMemes())
    }, [dispatch, meme])

    useEffect(() => {}, [memes])

    return (
        <div className="landing">
            <div className="landing__header">
                <h1>welcome to challenge chan</h1>
                {authenticated ? (
                    <button onClick={handlePostClick} type="button">
                        [Post A New Meme]
                    </button>
                ) : (
                    <h3>Create a new account to post fresh memes :)</h3>
                )}
                {authenticated && showPostMeme && <PostMeme />}
            </div>
            <div className="landing__main">
                {memes &&
                    memes.map((meme) => {
                        return <Thread key={meme._id} meme={meme} />
                    })}
            </div>
        </div>
    )
}

export default Landing
