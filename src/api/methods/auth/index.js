import httpClient from '../../http-client'

export function signUp(data) {
    return httpClient({
        url: '/user/sign-up',
        method: 'POST',
        data,
    })
}
