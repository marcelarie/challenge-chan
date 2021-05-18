import axios from 'axios'
import { auth } from '../../firebase'

export const methods = {
    POST: 'POST',
    GET: 'GET',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

export default async function httpClient({ url, method, data }, needsAuth = true) {
    const baseUrl = 'http://localhost:5001'

    if (needsAuth && !auth.currentUser) return { data: null }
    const token = needsAuth ? await auth.currentUser.getIdToken() : null

    const headers = needsAuth
        ? {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
          }
        : {
              Accept: 'application/json',
          }

    const response = await axios({
        url: baseUrl + url,
        method,
        data,
        headers,
    })
    return response
}
