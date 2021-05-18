import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'
// import { setUser } from '../redux/actions/user'

function useOnAuthStateChanged() {
    const dispatch = useDispatch()
    const { googleInfo } = useSelector(({ auth }) => auth)

    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {

        })

        return unsubscribeFromAuth
    }, [googleInfo, dispatch])
}

export default useOnAuthStateChanged

