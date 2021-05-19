import httpClient, { methods } from '../../http-client'

export function getUserMethod(id) {
    return httpClient({
        url: `/user/${id}`,
        method: methods.GET,
    })
}

export function getUserByUsernameMethod(username) {
    console.log(username)
    return httpClient({
        url: `/user/by-username/${username}`,
        method: methods.GET,
    })
}
