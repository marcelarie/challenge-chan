import { useSelector } from 'react-redux'
import PostMeme from '../../components/ui/post-meme'
import './styles.scss'

const Landing = () => {
    const {authenticated} = useSelector(({auth}) => auth)
    return (
        <div className="landing">
            <h1>welcome to challenge chan</h1>
            {authenticated && 
            <PostMeme />
            }
        </div>
    )
}

export default Landing
