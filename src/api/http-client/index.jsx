import axios from 'axios'
import { auth } from '../../firebase'

export default async function httpClient({ url, method, data }) {
    const baseUrl = 'http://localhost:5001'

    if (!auth.currentUser) return null
    const token = await auth.currentUser.getIdToken()

    const response = await axios({
        url: baseUrl + url,
        method,
        data,
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
    return response
}
